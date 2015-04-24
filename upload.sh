#!/bin/bash

# Script for copying all files to server location

# define location to copy all files to
SERVERLOC=~/public/html/

# do the copy, recursively and only when source file is newer then destination file
cp -r -u * $SERVERLOC
