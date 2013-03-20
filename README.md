
# jilla

jilla is a Jira client for lazy people.

## Installation

Install [node.js](http://nodejs.org/). Then, in your shell:

```bash
$ npm install -g jilla
```

## Usage

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
   ls                          List open issues
   start     <id>              Start working on an issue
   stop      <id> (--log)      Stop working on an issue (and log time)
   log       <id> <time>       Log work
   running                     List issues in progress
   resolve   <id>              Resolve issue
   reopen    <id>              Reopen issue
   close     <id>              Close issue
   search    <term>            Find issues
   describe  <id>              Display issue synopsis
   comments  <id> (--reverse)  Display comments on an issue
   subtasks  <id>              List an issue's subtasks
   comment   <id> "<message>"  Comment on an issue
   user      <term>            Search for a user
   assign    <id> <user>       Assign issue to a user
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

### Search issues

```bash
$ jilla search lesslinter preprocessor
WDSERVICE-78 <jgruber> !! LessLinter
WDSERVICE-79 <fstock>   ! LessLinter testen
```

### Resolve, Close & Reopen

```bash
$ jilla resolve PS-656
$ jilla close PS-656
$ jilla reopen PS-656
```

### Describe an issue

```bash
$ jilla describe IDEA-2
Ticket:      IDEA-2
Summary:     Scott's Jilla Test Ticket
Status:      Open
Reporter:    Scott Seaward <sseaward@nypublicradio.org>
Assignee:    Scott Seaward <sseaward@nypublicradio.org>
Labels:
Subtasks:    0
Comments:    1
Description:

    This is a ticket to test Jilla on.

```

### Comment on an issue

```bash
$ jilla comment IDEA-2 "Hello, \\ World!"
```

### List comments on an issue, latest at the bottom

```bash
$ jilla comments IDEA-2
Author: Scott Seaward
Date:   Fri Mar 08 2013 10:27:36 GMT-0500 (EST)

    damn you \\ space coyote

Author: Godfrey Jones
Date:   Fri Mar 09 2013 08:00:12 GMT-0500 (EST)

    Hello Homer, this is the voice of *God*...frey Jones.

```

### List comments on an issue, latest at the top

```bash
$ jilla comments IDEA-2 --reverse
Author: Godfrey Jones
Date:   Fri Mar 09 2013 08:00:12 GMT-0500 (EST)

    Hello Homer, this is the voice of *God*...frey Jones.

Author: Scott Seaward
Date:   Fri Mar 08 2013 10:27:36 GMT-0500 (EST)

    damn you \\ space coyote

```

### Search for users

```bash
$ jilla user hom
homer     Homer         <homer_the_poet@gmail.com>
hsimpson  Homer Simpson <homer@thesimpsons.net>
```

### Assign a ticket to a user

```bash
$ jilla assign IDEA-2 homer
1  Homer <homer_the_poet@gmail.com>
2  Homer Simpson <homer@thesimpsons.net>
Found multiple users, choose one by typing a number and hitting return: 2
Assigned IDEA-2 to user "Homer Simpson <homer@thesimpsons.net>".'
```

## License

(MIT)

Copyright (c) 2012 &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
