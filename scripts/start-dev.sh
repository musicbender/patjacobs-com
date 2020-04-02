#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/../.env.build.development"

gatsby develop -o -H local.patjacobs.com -p 8000