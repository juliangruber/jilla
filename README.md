jilla
=====

**jilla** is a *Jira* client for lazy people.

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

### Show my issues
```bash
$ jilla ls

  WDSERVICE-78 <jgruber>  !! LessLinter
  PS-656       <jgruber>  !! Graphite installieren
  PS-480       <pkostoff>  ! Trailing stops

```

### Log work
```bash
$ jilla start PS-656
```

```bash
$ jilla stop  PS-656

  Time spent: 2.5 hours

$ jilla log PS-656 2.5h
```

or

```bash
$ jilla stop PS-656 --log

  Time logged: 2.5 hours
  
```

```bash
$ jilla running

  WDSERVICE-78 2.5 hours
  PS-656       10 minutes

```