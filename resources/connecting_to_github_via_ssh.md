# Connecting to github via ssh

Every time you use git to communicate with Github, it will send your commit history securely to the github servers.  This security is a good thing!  But it can be a bit of a pain to have to type your username and password every time you push.  The solution is to use SSH keys to push to and pull from Github, instead of using HTTP.  The option is in how you set up your remote (when you click on the green "Clone or download" button, click "use ssh").  The URI that results will look strange, because it's not HTTP, it's SSH.  Use that to set up your remote in your local git repository.

Okay, now that you have that, you need to actually set up github to be able to use SSH in general.  To do that, follow [these instructions/blog post](http://blog.lilianakastilio.co.uk/blog/2016/10/30/stop-wasting-time-logging-into-github-on-command-line-every-time-you-push-just-set-up-ssh-keys/).  While you're doing that, remember the passphrase!  This is your SSH passphrase.  Now, once you've worked all the way through that blog post, you can successfully communicate to github using SSH--only now, git will ask for your SSH key passphrase instead of your github username and password!  The trick is to store the passphrase using `ssh-agent`, perhaps using [keychain](https://help.github.com/articles/working-with-ssh-key-passphrases/).  

The following collection of posts helped me to get something working.  It depends on your machine which will be most useful.

* https://stackoverflow.com/questions/21095054/ssh-key-still-asking-for-password-and-passphrase
* https://help.github.com/articles/working-with-ssh-key-passphrases/
* https://stackoverflow.com/questions/10622291/keychain-for-ssh-add
* [for those use WSL, like Dr Z](https://stackoverflow.com/questions/18404272/running-ssh-agent-when-starting-git-bash-on-windows/45562886#45562886)
