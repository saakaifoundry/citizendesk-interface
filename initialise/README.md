#### Initialisation scripts

This folder contains scripts useful to initialise the database. It
will be possible to run the scripts all together or just one
collection at a time.

- `main.py` contains the definitions used around
- `init_all.py` can be used to run all the collection initialisations

The other scripts will initialise one collection at a time.

Run with `python initialise/init_all.py` or `python initialise/users.py`

#### Users

Users are initialised through a Superdesk command, thus they have
their own Bash script. The script is supposed to be run from within
this folder. It will generate some weak passwords and store them in a
file.

#### Testing

Please test the initialisation script on a local Mongo instance before
pushing changes to master
