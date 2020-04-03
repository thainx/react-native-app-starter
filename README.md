# React Native app starter
## Prerequisites
Before you start, you should have these tools installed:
* Yarn
* Ruby
  * Bundler (`gem install bundler`)

## Getting started
First, install Bundler dependencies:
```
bundle install
```
After that, install yarn packages:
```
yarn install
```
Then, use this following command to change the name of the project:
```
yarn rename <YOUR_APP_NAME>
```
Finally, go to `ios/` folder and install Pod dependencies for the iOS app:
```
bundle exec pod install
```

## Directory structure
`src/` is the main folder to store all of the source code. It includes these sub-folders:
* `app/`: the main module of the project, consisting of common features such as: 
  * `routes`: for organizing the relation between screens
  * `screens/`: React components for arraging screen layout and navigating to other screens
  * `containers/`: smart React components for handling data inside the app
  * `components/`: dumb React components for showing the app theme
  * `store`, `sagas`, `reducers`: Redux starting point for the project
* `example/`: a module to manipulate the `example` data model. Each data model in the project will have its own directory (`user`, `book`, e.t.c.).
  * We will put files representing Redux actions, reducers, sagas along with components (and containers) associated with the respective data model inside this folder.

## Available technical stacks
This boilerplate includes some common libraries which are praised by communities, such as:
* React Navigation for routing in the app
* Redux to help manage state
* Redux Saga to handle asynchoronous actions
* styled-components to customize the UI
* Formik to handle forms' state
* Ramda for utility functions