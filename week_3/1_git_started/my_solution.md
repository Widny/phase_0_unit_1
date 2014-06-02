## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
<!-- Your defnition here -->
Allows you to add changes to be committed to the file

#### branch
<!-- Your defnition here -->
Allows you to create a a separate branch from the master branch. 

#### checkout
<!-- Your defnition here -->
Allows you to to check out and switch to a new branch

#### clone
<!-- Your defnition here -->
Allows you to copy a git repository so you can look at, use the code, and add to it.

#### commit
<!-- Your defnition here -->
It takes a snapshot of the the changed content in the stage area.

#### fetch
<!-- Your defnition here -->
Download objects and refs from another repository. 

#### log
<!-- Your defnition here -->
This is like a journal that shows you what files you changed and committed and in the order it was committed.

#### merge
<!-- Your defnition here -->
This allows you to merge your changes made on a separate branch back to the master branch.

#### pull
<!-- Your defnition here -->
This command will allow you to fetch and merge with another repository or a local branch. 

#### push
<!-- Your defnition here -->
This pushes all files to the remote repository

#### reset
<!-- Your defnition here -->
This file is used to remove file(s) form the staging area.

#### rm
<!-- Your defnition here -->
This command removes the actual files from the disk

#### status

This command allows you to check the status of your repository. You are able to see how many files are inside it, which files need to be committed, and which branh of the repository you are currently working on.


## Release 4: Git Workflow

- Push files to a remote repository:
  
	Assuming that a local repository has been saved into your director,  you created  an online repository with  GitHub, and you’ve introduced yourself to Git using git config to insert your git hub information and repository, you are now ready to push any changes to a file to the remote repository. Here are the steps:


	1. Go to the terminal 
	2. type cd <name of the directory>
	3. type git init. this will initialize or reinitialize the file
	4. type git status. This will show that you have an untracked file that 
	   needs to be committed
	5. type git add
	6. type git commit -m “Type a message about this commit” 
	7. type git remote -v. 
	8. type git push 

- Fetch changes:
 	1. git remote -v to list the current remote
 	2. git remote add upstream <remote repository name> if you did not have
 	   it in your remote list
 	3. git fetch upstream this will bring in the changes into a special 
 	   branch in local repository but it does not merge the file.

- Commit locally:


## Release 5: Errors you encountered
1. Error
   - i received an error because I forgot to put a closing quotation mark on the commit message
2. Solution
   - had t redo and remembered to put closing qoutation mark 
3. Cause (explain the error):
   - Error was caused because i was not paying attention. 

## Release 6: Reflection

  This challenge really helped me understand how to use the commnd line. I was previously intimidated by it.  I believ with nore practice using the command line will become more second nature to me. 

  The strategy i used while learning the command lines was actually going to the comamnd line and following the example of the resources. I opened a new repository and added a readme file to the respository using the command line. 

  In order to help me understand more about the command lines, i went to gitref.org, git-scm. com, kernel.com, and gitguys.com.

  I had trouble understanding the concept between git fetch and git pull, but one of the recources helped clarify it a little. If  I understand correctly,  git fetch only downloads from another repsoitory while git pull downloads and merges. 

  I am quite confident in my ccompentencies in using the command line and knowing what each do. Again, once i start applying , i will become a lot more quicker in using the command line. 

  I really enjoyed this challenge. It was ver beneficial for me. 