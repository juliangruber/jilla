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
  
  JIRA URL:
  Username:
  Password:
  
  Good to go!
    
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