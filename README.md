jilla
=====

**jilla** is a *Jira* client for lazy people.

Installation
------------

Install [node.js](http://nodejs.org/). Then, in your shell:

```bash
$ npm install -g jilla
```

Usage
-----

### First use
```bash
$ jilla
JIRA URL: https://jira.atlassian.com/
Username:
Password:
Good to go!
```

### Print usage instructions
```bash
$ jilla
usage: jilla <command> [<args>]

Commands:
   ls          List open tasks
   start       Start working on a task
   stop        Stop working on a task
        --log  Log work also
   log         Log work
   running     List tasks that are being worked on currently

```

### Show open issues
```bash
$ jilla ls
WDSERVICE-78 <jgruber>  !! LessLinter
PS-656       <jgruber>  !! Graphite installieren
PS-480       <pkostoff>  ! Trailing stops
```

### Show issues in progress

```bash
$ jilla running
WDSERVICE-78 2h 30m
PS-656       10m
```

### Start/Stop Progress
```bash
$ jilla start PS-656
```

```bash
$ jilla stop  PS-656
Time spent: 2h 30m
```
### Log work
```bash
$ jilla log PS-656 2h 30m
# or
$ jilla stop PS-656 --log
Time spent: 2h 30m
```

License
-------

(MIT)

Copyright (c) 2012 &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.