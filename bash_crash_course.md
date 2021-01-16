## Intro to Bash

- bash always has your username, your computer name (good to know when you have ssh-ed into other computers) and the `$` sign tells you you are a regular user, not root user.
- current directory: `pwd`
- -a for all, -l for long form plus more info: `ls -la`
- Wanna cd somewhere and come back? `pushd dir_name`. When you wanna come back, `popd`
- To see file type: `file file_name`
- To search for file by filename of part of filename: `locate file_name`. Linux uses a databse to do this and this database gets updates once a day. So sometimes searching may not work for you, but it will work tomorrow. To update the database manually: `sudo updatedb`. This may take some time to run for the first time.
- `which your_command` to find where it is.
- `cal` calender
- Access history: `history`
- Getting help:
  - `whatis your_command` to get info about a command
  - If you know what to do but don't know which command to use: `apropos a_word_related_to_your_command`.
  - To get more info `man your_command`.
- File/Directory manipulation:

  - `mkdir dir1 dir2`, `touch new_file` to create a file, `touch existing_file` to update date on a file.
  - `cp source destination`, `mv source destination` to move and rename. Rewrites 'destination' if it exists.
  - `rm file` no recycle bin, direct delete. `rm -r dir`. `rm -r *` removes everything in the current directory and then the directory itself -- poof!
  - `rmdir your_dir` removes empty directories. `rmdir *`.

- Working with texts:
  - `cat >> your_file` takes in input from you, puts it in the file. Ctrl+D when you're done. `>` replaces the whole thing.
  - `cat file1 file2` to concat and show them.
  - `more file1` shows you contents through pagination (by pressing spacebar). Use `q` to quit.
  - `less file1` You can use arrow keys to go up and down, use spacebar like before, search stuff. `q` to quit.
  - `history | less` pages through the output of `history` command.
  - `la -al . > out.txt` Writes output of ls command to the file.
- How users work:
  - As admin `sudo` = super user do.
  - `sudo -s` to run as root for a while. `exit` to get out. You get the `#` instead of `$`.
  - `su - anotherUser` the dash tell bash to become another user, load their settings and go their root. `su anotherUser` will just make you another user, but you will be still in your own home directory.
  - See all active users `users`
  - All info about your user `id`
- Permissions
  - With `ls -la` you also get a list of all permissions. First set of 3 is for the owner, second is for group and third is for everyone else. then `owner` then `group` name.
  - rwx = read (4 bits), write (2 bits), execute (1 bits).
  - chmod +x fileName (make this file executable for anybody)
  - chmod 700 fileName (rwx for owner, others get nothing 0, 0)
  - chmod 744 fileName (others can only read, owner can do all)
  - For working with directories: You need to set the execute for all, else no one will be able to get into it. If you set the read bit, they wont even be able to see it.
- `watch free -h` watch can run any command every 2 seconds. free shows memory.
- Process: `killall firefox` only if you started the process. If you don't know the name of the command, use `which firefox`.
- To exit use `exit`, `^D`

## Bash Scripting

- `cat /etc/shells` lists all shells, if it has `bash`, you're done. Also you can find bash by `which bash`.
- Start bash script file with `#! /bin/bash`. Make the file executable `chmod +x script.sh`. Execute by `./script.sh` or `bash script.sh`
- Comments:

  ```bash
  #! /bin/bash

  # Its a comment
  echo "stuff"

  : '
  multline comment
  ...
  stuff'
  ```

- Output script text to terminal

  ```bash
  #! /bin/bash

  cat << yourVarName
  text..text..text
  #even comment is printed
  yourVarName

  echo "Not anymore!"
  x=5
  y=$x+2
  echo $y
  ```

- Conditionals: Note multiple ways yo check `<` or `>`. Also if variables have wildcards or spaces, it's better to quote the variable in conditionals. Multiple ways to do `&&`. Also `||`, `-o` works similarly.

  ```bash
  #! /bin/bash

  $count=10

  if [ $count -eq 10 ]
  then
  	echo "is 10"
  elif [ $count -gt 10 ]
  then
  	echo "is greater than 10"
  elif (( $count > 10 ))
  then
  	echo "also greated than 10"
  elif [ "$count" -gt 10 ] && [ "$count" -lt 40 ]
  then
  	echo "between 10 and 40"
  elif [[ "$count" -gt 10 && "$count" -lt 40 ]]
  then
  	echo "same thing as above!"
  elif [ "$count" -gt 10 -a "$count" -lt 40 ]
  then
  	echo "also same thing as above!"
  else
  	echo "dunno"
  fi
  ```

- Loops: `until` loop is like `while`, but it will run until the given condition becomes true (whereas while runs until the condition is false). `{start..end..inc}` is the syntax, inc=1 by default.

  ```bash

  n=1
  while [ $n -lt 10 ]
  do
  	echo $n
  	n=$(( n+1 ))
  done

  for i in {0..20..2}
  do
  	echo $i
  done

  for (( i=0; i<5; i++))
  do
  	echo $i
  continue
  break
  done
  ```

- Read input `read myvar`
- Arguments: For `./script.sh arg1 arg2` $0 is filename, and others are $1, $2 etc.
  - Get args as array with `args=("$@")`and access by`${args[0]}`.
  - Get length of the array by `$#`
  - To write stdout and stderr in different files do this `your_cmd 1>output.out 2>output.err`. 1 here means stdout, 2 means stderr. Doing `your_cmd > output.txt` assumes output.txt as the stdout file, but stderr is shown in terminal itself. To use same file for both do `your_cmd >out.txt 2>&1` or `your_cmd >& out.txt`
- Send variable from one script to another. Here the msg variables gets sent to anotherScript.sh
  ```bash
  msg="something"
  export msg
  ./anotherScript.sh
  ```
- String comparison [see this](https://linuxize.com/post/how-to-compare-strings-in-bash/). `\<` or `\>` to compare.
- Uppercase first char `${myVar^}`, Uppercase `{myVar^^}`, Uppercase specific chars `${myVar^^[xyz]}`. Lower case first char `${myVar,}`, Lowercase `${myVar,,}`, Lowercase specific chars `${myVar,,[XYZ]}`. See more [here](https://stackoverflow.com/questions/2264428/how-to-convert-a-string-to-lower-case-in-bash).
- Arithmetic:
  - `$(( var1 + var2 ))` or `$(expr $var1 + $var2 )`
  - Hex to decimal, vice-versa, etc, we use the bash calculator (bc): `"obash=10; ibase=16; $hexVal" | bc`
- `declare` command: Set variable `declare x` or also set value `declare x=10`. To make vars read only `declare -r myVar=something`
- Arrays:
  - Initialize by `arr=('var1' 'var2' 'var3')` and access by `${arr[0]}`
  - Number of array elements `${#arr[@]}`, print whole array `${arr[@]}`
  - Delete index `unset arr[2]` and list indices `${!arr[@]}`. Unsetting it removes that index from this list. Set new value `arr[2]='newVal'`
- Functions:

  ```bash
  #! /bin/bash

  function func()
  {
    echo "No param func"
  }

  # call function
  func

  function func2()
  {
    echo "arg1" $1 "arg2" $2
  }

  # call function
  func2 "Hi" 90

  ```

- Directory and files:
  - `mkdir -p dirName` to recreate if already exists.
  - `if [ -d "$dirName" ]` check if directory exists. `-f` to check if file exists.
  - To append (`>>`) or write anew (`>`) in file: `echo "$fileText" >> $fileName`
  - Read from file. Here `IFS=` is same as `IFS=""`, is used for dealing with white spaces.
    ```
    while IFS= read -r line
    do
      echo "$line"
    done < $fileName
    ```
- Send Emails: First install `sudo apt install ssmpt`. From google you have turn **on** the less secure apps access. Open `/etc/ssmtp/ssmtp.conf` and add the following. tls port is 587, ssl port is 465. Don't use your original email to do this, as you can see, less secure.
  ```
  root=your_mail_address
  mailhub=smtp.gmail.com:587
  AuthUser=your_mail_address
  AuthPass=your_pass
  UseSTARTTLS=yes
  ```
  From your script do `ssmpt your_mail_address` and running it will take input from std in. Write like
  ```
  To: to_mail@gmail.com
  From: your_mail_address
  Cc: someone@something.com
  Subject: subject
  This is body
  ```
  -Downloads
  - Download file `curl $url -O` to keep downloaded file name or `curl $url -o newFileName` to give new name. You can also `curl $url > newFileName`.
  - Download header abd check if file is okay. `curl -I $url`
- Select statement: This gives a list of options and user can type in 1,2,3... to select any one of these options.
  ```
  select var in value1 value2 value3
  do
    echo "You have selected $var"
  done
  ```
- Monitor files and directories: `sudo apt install inotify-tools` then in script `inotifywait -n your_file_or_dir`
- Search text by `grep searchStr fileName`. Do `grep -i str file` to make it case insensitive. Use `-n` to show line numbers. `-c` gives you how many times the string appears. `-v` inverts the search. See `man grep` for more.
- awk command

  ```bash
  awk '{print}' $fileName # prints the file
  awk '/str/ {print}' $fileName # searches for 'str' in the file and prints those lines
  awk '/str/ {print $1,$4}' $fileName # prints the 1st and 4th word of the lines that matched

  ```

- sed command

  ```bash
  cat $yourFile | sed 's/i/I/' # substitute(s) first i with I and cat it
  sed 's/i/I' $yourFile # works same as above

  cat $yourFile | sed 's/i/I/g' # substitute all i with I and cat it

  sed 's/i/I/g' $yourFile > $modifiedFile
  sed -i 's/i/I/g' $yourFile # modifies the same file
  ```

- Debugging bash script:
  - Execute line by line by showing the code `bash -x ./myScript.sh`.
  - Inside the script, in the first line `#! /bin/bash -x`
  - Inside the script, start debugging here: `set -x`, end debugging here: `set +x`
