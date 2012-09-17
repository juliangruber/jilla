var fs = require('fs');
var readline = require('readline');
var request = require('superagent');

getConfig(function(cfg) {
  var cmd = process.argv[2];
  if (cmd == 'ls') {
    request
      .get(cfg.url+'rest/api/2/search?jql=assignee='+cfg.user+'+AND+status+in+(Open,"In+Progress",Reopened)+order+by+due+ASC,+priority+DESC')
      .set('Content-Type', 'application/json')
      .auth(cfg.user, cfg.password)
      .end(function(res) {
        if (!res.ok) throw res.text;
        var issues = res.body.issues;
        console.log('');
        var table = [];
        for (var i=0; i<issues.length; i++) {
          table.push([
            issues[i].key,
            '<'+issues[i].fields.reporter.name+'>',
            {data: formatPrio(issues[i].fields.priority.name), right: true},
            issues[i].fields.summary
          ]);
        }
        console.log(formatTable(table));
      });
  }
});

function formatTable(cols) {
  var rowLengths = [];
  var output = '';

  for (var i=0; i<cols.length; i++) {
    for (var j=0; j<cols[i].length; j++) {
      if (!rowLengths[j]) rowLengths[j] = 0;
      if (typeof cols[i][j] == 'string') cols[i][j] = {data:cols[i][j]};
      if (cols[i][j].data.length > rowLengths[j]) {
        rowLengths[j] = cols[i][j].data.length;
      }
    }
  }

  for (var i=0; i<cols.length; i++) {
    var col = ' ';
    for (var j=0; j<cols[i].length; j++) {
      if (j == cols[i].length-1) {
        col += cols[i][j].data;
        continue;
      }
      col += pad(
        cols[i][j].data,
        rowLengths[j],
        {right: cols[i][j].right}
      ) + ' ';
    }
    output += truncate(col, 79)+'\n';
  }

  return output;

  function pad(str, len, cfg) {
    cfg = cfg || {};
    cfg.character = cfg.character || ' ';
    if (cfg.right) {
      while(str.length < len) str = cfg.character + str;
    } else {
      while(str.length < len) str += cfg.character;
    }
    return str;
  }

  function truncate(str, len) {
    if (str.length <= len) return str;
    while (str.length > len-3) str = str.slice(0, -1);
    str = pad(str, len, {character:'.'});
    return str;
  }
}

function formatPrio(name) {
  if (name == 'Trivial')  return '';
  if (name == 'Minor')    return '!';
  if (name == 'Major')    return '!!';
  if (name == 'Critical') return '!!!';
  if (name == 'Blocker')  return '!!!!';
}

function getConfig(cb) {
  var cfg;

  var home = (process.platform == 'win32') ? 'USERPROFILE' : 'HOME';
  var cfgPath = process.env[home]+'/.jilla.json';
  try {
    cfg = require(cfgPath);
    cb(cfg);
  } catch(err) {
    askFor(['Jira Url', 'Username', 'Password'], function(answers) {
      cfg = {
        url     : answers['Jira Url'],
        user    : answers['Username'],
        password: answers['Password']
      };
      if (cfg.url[cfg.url.length-1] != '/') cfg.url += '/';
      // TODO: Save password in a save way
      fs.writeFileSync(cfgPath, JSON.stringify(cfg));
      cb(cfg);
    });
  }
}


function askFor(questions, cb) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var answers = {};
  console.log('');

  (function ask() {
    var question = questions.shift();
    rl.question('  '+question+': ', function(answer) {
      answers[question] = answer;
      if (!questions.length) {
        rl.close();
        console.log('\nGood to go!\n');
        return cb(answers);
      }
      ask();
    });
  })();
}