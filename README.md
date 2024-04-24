# University of Michigan - JSA Website

This is the repository for the official JSA @ University of Michigan website. The website is designed to be easy for people with no CS and Git background to edit and modify, putting all the main inforamtion inside a JS file which are dynamically loaded via Javascript. Note that the browser may cache the JS files, resulting in the page not updating immediately. To resolve these issues locally, the person viewing the webpage should hit CTRL + SHIFT + R to refresh and clear the cache. 

The website is available at www.jsaumich.org/



# Instructions for Changing Website (For Non-Technical Users)

The only folder you should be editing is `Data`. The js file contains all the relevant information that gets loaded into the website. Inside these files, there are instructions on how to edit the files to add/modify information. The in-depth step by step guide is as follows:

1. Log into GitHub using the `jsauofm` account. Login information can be found in the JSA drive (likely inside resources).
2. Go to the file inside `Data/` that you want to edit. Hit the pen icon and follow the grayed-out instruction in the JS file to modify it. Make sure that you closely follow the instruction and always make sure every opening brackets, quotation marks, and squiggly brackets are followed by a corresponding closing one. Please also keep indentation in mind for readability.
3. Once you finish editing, hit `commit changes`, give it an appropriate description inside `commit message` (i.e., fixed typo in Rei's description), and hit `commit changes` again.
4. If you are adding images and/or other files, go to the correct folder, hit `upload files`, and follow a similar step as above after adding the files.
5. Give the page a minute or two for it to finish updating. Make sure to hit CTRL + SHIFT + R on the website to check that your updates are reflected.



# Instructions for Changing Website (Detailed Technical Overview)

The website DNS is hosted via Google Domain. Please ask the current domain owner(s) to gain domain access. In general, you should not need to modify the domain besides when you want to renew the website, which will need to happen once a year before May (it is a very simple one-time payment of around $12). **PLEASE MAKE SURE TO RENEW THE DOMAIN** so that our website does not go *poof*.

The website is hosted entirely on GitHub pages for free, with the DNS to redirect any access to www.jsaumich.org/ to the GitHub page. Thus, any commit will usually take a minute before the build and deploy the GitHub pages is completed and the page is updated (also note that your browser will cache some files, so you may need to do CTRL + SHIFT + R on the website to see the changes). 

If you plan on modifying or adding a page, please ensure that the website pulls any changing information dynamically so that they can be easily updated without editing the HTML code. There are many examples of this on the pre-existing pages. Generally, you will need to add a function inside index.js for pulling the data and load that function using the onload() tag inside the html. Don't forget to import the data JS file too. In the future, it may be a good idea to use GitHub actions to load the data from a csv file during the page build step for an even easier editing experience whilst removing the need for the website to dynamically pull the data every time the page is loaded, speeding up page loading. 

Please also ensure that you test the website locally before pushing the changes if you decide to directly modify the HTML, script JS file, or the CSS files. To do so, please follow these steps:

1. Open your terminal where you want to keep a local copy of the repository
2. Run `git clone https://github.com/jsauofm/jsa-website.git`
3. If you ran the above already, you can skip to here
4. Run `git pull`
5. Make changes and test locally by viewing the html in your browser
6. Run `git add *`
7. Run `git commit -m "COMMIT_MESSAGE"`, replacing COMMIT_MESSAGE with a short description of the changes you made
8. Run `git push` to publish these changes

If you get a merge error, that means someone else likely edited and pushed their changes before you did. I cannot help you with that. Merge errors suck. It is generally a good idea to avoid editing the website simulatenously with someone else (especially the same files), or create branches to work independently to avoid these issues. 
