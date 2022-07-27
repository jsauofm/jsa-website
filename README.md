# University of Michigan - JSA Website

This repository consists of a draft of the 2022 University of Michigan JSA website. Building on the model from last year, we decided to add more information about events, kazokus, and alumni as well as writing a more intuitive interface. This website is currently connected to the custom domain www.umichjsa.org. Feel free to check it out!

# Instructions for Changing Old Domain (hosted on UM domains)

1. Follow the steps in https://its.umich.edu/computing/web-mobile/mfile/alternative-access to download Cyberduck.
2. Once downloaded, navigate backward to /afs/umich.edu/group
3. Navigate to u -> umjsaofficial -> Public -> html -> index.html
4. To change redirection of the domain, right click and select "Edit With". Once in chosen text editor, change the URL in line 7. Ctrl+S to update the page.

# Instructions for Publishing to Custom Domain

1. Open Google Firebase. Open the "jsaumich-website" project.
2. Under "Build", select "Hosting" where you can add a custom domain.
3. Open Google Domains. Select the desired domain and select the subheader "DNS".
4. Copy the host value from Firebase. In Google Domains, select "Manage custom records" and paste copied value into the "Data" field.

# Steps to Publish to Custom Domain

1. Follow the steps here: https://firebase.google.com/docs/hosting/quickstart
2. Make sure that all the useful files exist in the "Public" folder.
3. Run `firebase deploy` to push the newest version of the website.

# Steps for Updating the Page

1. Navigate to where you've stored the local version of this repository.
2. Run `git pull`
3. Make changes
4. Run `git add .`
5. Run `git commit -m " "` where you can comment on the changes you've made
6. Run `git push`
7. Run `firebase deploy` to push the newest version of the website.

# Set up Firebase Hosting

1. Install Firebase CLI. To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool). Use `npm install -g firebase-tools` (might need to do `sudo npm install -g firebase-tools` if no permission).
2. If above doesn't work, you may need to down npm. Follow the steps on this site: https://sebhastian.com/npm-install-not-working/, then return to step 1.
3. Initialize your project. Open a terminal window and navigate to a root directory for your web app. Use `firebase login` to sign into Google. When ready with a change, use `firebase deploy` to deploy web app.
