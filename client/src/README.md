# How to handle the Large set of list items

when we hacve the large set of list items that need to be rendered on screen withour the performance hit

like various complex user dashboards have large set of data, that neeeded to be loaded on dom , but it will not
performance hit or make dom sluggish as things take time to load, when something changes on screen

so their are two way which we tackle , 1. react memo and 2. infinite scroll methods

but these method also fails , becuase it cannot used in every scenario

to resolve this we have two diffrent librarues to handle this type of list on dom

# Instructions

## 1. React window [text](https://github.com/bvaughn/react-window)

## 2. Tanstack virtual [text](https://tanstack.com/virtual/latest)
