# My Puja Website
A full stack web app with organized directory of events / pujas and livestreams directed toward Hindu temple-goers, specifically patrons of the Toronto Kalibari temple.

## Features
- Display pujas / temple events in an organized fashion
  - Allow for complex searching using keywords to account for spelling variations that stem from translation
  - Add calendar events for temple events with one click
- Display puja / temple event streams and create an organized directory of previous ones
- (hidden from demo) Directly donate money to the temple using Stripe (only frontend finished)
- (TODO) Send notifications when a livestream for a temple event starts

## Demo
Since this is a working website made as a personal project for a temple, it can be found here: https://my-puja-production.web.app

## Project Info

### Frontend
The frontend uses React.JS for the website. PWA integration has been added to account for the lack of a native version. However, a native version may be coming soon.
### Backend
The backend uses Firebase's Cloud Firestore to store all events / pujas in an orderly fashion, Firebase Storage for hosting images. For livestreaming, the source is taken from Toronto Kalibari's website. If the event is also streamed on YouTube, then a code is stored so it can be displayed as a previous livestream later.

## Installation
You can just get this project running on your computer like a normal `create-react-app` project, but here's the instructions to clarify.
1. Clone the repository
2. Run `npm install` to install all dependencies, this might take a while
3. (optional) For Firebase support, don't forget to install `firebase` as a global package and change the projects in `.firebaserc`
4. To run the project locally, run `npm run start`
5. To build the project, run `npm run build`

## Author
**Name**: Aritro Saha

**Github URL**: [axiumin](https://github.com/AritroSaha10)

**Twitter**: [@AritroSaha10](http://twitter.com/aritrosaha10)
