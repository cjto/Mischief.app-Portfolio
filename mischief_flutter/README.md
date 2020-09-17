# Mischief.app Flutter

*Note: Due to Mischief.apps' non-disclosure terms, the exact Flutter code can not be distributed. <br>The code provided is an empty Flutter project*

## Left and Right Drawer Navigation
- **Left Drawer/Menu Bar** is summoned on left screen swipe or top left menu button press.
- Particular cells in the left drawer have collapsing cells that contains more cells.
- Cells route to its designated screen.
- **Right Drawer/Menu Bar** is summoned on right screen swipe or top right avatar button press.
- Right menu provides basic account informations and cells that navigate to other account related screens.

<img src=http://g.recordit.co/AJtS8xcl8V.gif width=250>  <img src=http://g.recordit.co/K7P0fVv7Rj.gif width=250><br>
## Newsfeed
- Created a scrollable **Newsfeed Timeline** from a ListView component that iterates through a JSON RESTful object. 
- Makes calls to a backend that is deployed on Google Cloud.
- Each post type is distinct, has different data information, and is interactive.

<img src=http://g.recordit.co/SadPWGxWui.gif width=250><br>
### -Newsfeed: Likes
- Routes to a screen that shows users that liked the specific post.
- Created with a ListView that iterated through a local JSON file.

<img src=http://g.recordit.co/An6xeXt2DX.gif width=250><br>
## Casting Profile
- The **Casting Profile** workflow asks users for information and media when creating a User Profile as an actor.
- These include: Headshots, Videos, Personal Information, Travel Preferences, Schedule Information, and Social Media.

<img src=http://g.recordit.co/jFJVPEUN1p.gif width=250><br>
### -Casting Profile: Add Headshots 
- In **Add Headshots**, users are able to upload their best headshots/images of themselves.
- When users press on any of the four images, the user's camera roll/gallery is summoned where the user can pick their favorite images.

<img src=http://g.recordit.co/sdd3hJgIwG.gif width=250><br>
### -Casting Profile: Add Videos 
- The scrollable **Add Videos** component gives users a chance to upload reels of their past work which then displayed in a ListView.
- User can either upload videos by a YouTube link or a more local approach by summoning the camera roll/gallery.

<img src=http://g.recordit.co/8BAADVW6d8.gif width=250>  <img src=http://g.recordit.co/vHuJqrbw3B.gif width=250><br>
### -Casting Profile: Basic Information 
- Users can input more of their general information in **Basic Information**.
- Some features implemented in this component consist of text input fields, dropdown lists, and color-changing buttons.

<img src=http://g.recordit.co/4vvBeu8po5.gif width=250><br>
### -Casting Profile: Travel Preferences 
- Similarly to the previous component, the **Travel Preferences** module asks for the users preferences towards locations.
- Some interactive features implemented in this component consist of text input fields, sliders, checkboxes, and country tags.

<img src=http://g.recordit.co/KEKlmbAyxF.gif width=250><br>
### -Casting Profile: Set Your Schedule 
- **Set Your Schedule** consists of an embedded Google Calendar API that shows the user's schedule.

<img src=http://g.recordit.co/4WEzlbuaeT.gif width=250><br>
### -Casting Profile: Link Social Media 
- **Link Social Media** connects to a Facebook API that authorizes the user to connect their Facebook account to Mischief.app
- Future Implementations: Connect to YouTube and Instagram API

<img src=http://g.recordit.co/TvAKubab1T.gif width=250><br>
### -Casting Profile: Review Profile
- Lets users review their inputted data and edit if necessary

<img src=http://g.recordit.co/k494okEEUn.gif width=250><br>
