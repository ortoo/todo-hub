# TodoHub - The GovernorHub Developer Test

## Introduction

TodoHub is a simple "todo list" application in need of some love and care. TodoHub in its current iteration has the ability to list todo items, as well as add new todo items, but in order for it to become usable it needs some extra functionality. Your job is to implement that extra functionaility, you are also welcome to dazzle us with any extras you have up your sleeve, within the time allocated.

It is expected that this test will take around a maximum of 2 hours of your time to complete, plus the time you need for the often forgotten configuration and setup 'faffing'. _(We have all been there and have felt the pain, hopefully this **README** will reduce that pain to a minimum)_

This **README** goes through a lot of details about this application and what we expect / are asking from you, but we must stress that we are more interested about the way you solve the problems, than your knowledge of the stack.

We have added extra details (such as commit message standards etc) because we want to give you a good idea of our standards and the way we work, if you have any views on them (good or bad), it would be great to hear what you think.

At GovernorHub we think its important to strive to write the best software, using the most suitable tools, with the most efficient processes for the project.

## The Stack

TodoHub is a [React](https://reactjs.org/) application using the [Next.js](https://nextjs.org/) framework, with [Material UI](https://material-ui.com/) as a UI component library using [Typescript](https://www.typescriptlang.org/) as the coding language. (_gosh that's a mouthful_).

The styling solution is a little bit different to normal CSS, where a CSS-in-JS solution is used that is built into Material UI. Details of how this works can be found [here](https://material-ui.com/styles/basics/). If you are familiar with CSS it shouldn't be much of a problem to adapt to.

Despite this seemingly complex stack of non-standard frameworks and libraries, the test is designed to be completed by developers who have no experience in them, and can most definitely be completed by those who have only experienced Javascript rather than Typescript. (_Typescript is a super-set of Javascript, so Javascript can be used just fine with no issues_).

The idea is that the skeleton of the application and the instructions in this **README** are enough to carry out the tasks required.

_Note: This is very similar to the front-end stack we use at GovernorHub, on our main product and new developments_

## Standards / Guidelines

For the most part, at GovernorHub we don't hold many strict coding or general standards, they are more guidelines with the aim of helping our team know what to expect when they come across someone elses code.

The key thing is to be consistent, if a certain project or area of a project is using a particular standard, either abide by it, or come up with a good reason why it needs changing, and change it.

### Commit Messages

At GovernorHub we like to use a common language for our commit messages, we follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification when possible. This provides a nice and easy set of rules for creating an explicit commit history. It also allows us to be more consistent as a team.

### Imports

When importing from libraries, try and keep consistent with the grouping of imports, as well as the method of importing. It is recommended to follow what the TodoHub code base currently does, but if you prefer a different way of doing things, feel free to change things, just make sure you are consistent with your changes.

For example:

```
// react imports
import React, { useState } from "react";

// material-ui imports
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

// internal imports
import { TodoItem } from "../TodoItem";
import TodoItemForm from "../TodoItemForm";
```

_Note: there is what seems to be a bug with `material-ui` imports and VSCode_

```
// VSCode will try to import material-ui components in 2 incorrect ways

// Although this way will work, it does not enable tree-shaking (all the components will be imported rather than only what we need)
// This can be mitigated using babel, but this project will not tree-shake properly
// Wrong (but if you did it this way consistently it isn't a massive issue as long as you are aware of tbe pitfalls)
import { Dialog } from "@material-ui-/core"

// VSCode will also try to do this, if you leave imports like this in projects, then styles can be loaded in twice, casuing some odd CSS issues down the road
// Wrong
import Dialog from "@material-ui-/core/Dialog/Dialog"

// Try and do it this way to stay consistent
// Right
import Dialog from "@material-ui-/core/Dialog"
```

### Naming

> Naming things is the hardest part of software development - _James Sharp - Head of Engineering_

When naming things, be explicit and make sure that the next person who looks at your code is able to read it. The code you write isn't just for the compiler, it's also for the next person. Keep that in mind.

## Getting Started

We won't go into too much detail here as we are sure you already have these things or know how to get them installed easily enough.

### Prerequisites

- A code editor, we recommend [Visual Studio Code](https://code.visualstudio.com/).
- [Node.js & NPM](https://nodejs.org/en/), npm comes with node, get version 14 at the very least and make sure it is configured in your PATH.
- The latest version of Typescript, which can be installed globally using `npm install -g typescript` after you have installed npm in the previous step.
- Yourself and a coiuple of hours of your time.

### Setup

1. Duplicate this repository (https://github.com/ortoo/todo-hub), if you are unsure how to do this, please refer to [these instructions](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/duplicating-a-repository).
2. Ensure that your repository is private so that other applicants cannot see your code.
3. Clone to your local machine so that you can start developing.
4. Navigate to the folder you have cloned the project to.
5. run `npm install`.
6. Start the application and test that the current functionaility is working using `npm run dev` and navigating to `localhost:3000`.
7. During development, Next.js uses hot reloading and remembers the state of your components, so just save the file you are working on and the application should automatically update, it will also display errors to you in the browser. _Note: Sometimes it doesnt quite work right, if thats the case just re-run the app with `npm run dev`_
8. 🎉

## The Application

### Structure

`/pages/index.tsx` is the home page of the application, you shouldn't need another page for what is being asked, so everything can go through this file. If you were to create another page, you would create another folder in `/pages` with an `index.tsx` inside, whatever you named the folder would be the url route of the page.
For example `/pages/login/index.tsx` would be accessible via `localhost:3000/login`

`/src/components` is where the components for the application live. It has 2 folders:

- `header`, where the application app bar is located.
- `todoItem`, where all the code and components concerning a todoItem are held. The list is in `list` and the create modal is in `create`.

The way that the components folder is structured is entirely subjective, but again, its good to be consistent with whatever you choose to do. You are free to change this structure as long as none of the current functionaility is lost.

### Tasks

Congratulations, you've made it this far!

Now we can get into the meat of the test, the test is comprised of a set of tasks that lay out loose specifications for features we would like added to TodoHub. You can solve the issues in any way that you see fit, try to keep each task delivered within a single commit with a suitable message (we know and expect that you may find bugs in your own code later and commit a fix at a later time, that is fine). Where possible, add code documentation to let us know why you have done something. This makes it easier for us to understand your style and thinking behind the problem.

Overall, we are not looking to test your knowledge of the frameworks and libraries at play here, but the way in which you solve the problems and construct your solutions. Although not critical, special attention to the user experience would be welcomed, and thanks to the already imported Material-UI, shouldn't be too difficult to get something together that looks good and works in a seamless manner.

If you have enough time, you are free to implement any extra features you like, a good example might be saving your todo items to local storage and retrieving them when a user returns.

If you have any trouble with anything framework related, then do not hesitate to contact us.

Last but not least, enjoy! It should be a fun little task with some scope to express yourself.

1. The current implementation of adding a todo item has a major bug that can result in empty todo items being submitted, can you fix this please?
2. As a user I would like to be able to mark a todo item as completed, once marked as completed it should become clear to the user that the todo item is completed and they must have the ability to undo the action. You may want to move the item within the list as it is now more / less important.
3. As a user I would like to remove a todo item from my list of todos, take special care here and ensure that the user wont remove an item by mistake.
4. As a user I would like to edit my todo item as I didn't properly fill in all the information I should have when creating it. The `TodoItemForm` that already exists in the application could be used to help you here.

## Submission

Once you have completed the tasks, invite `Kyle Selman` as a collaborator on your repository so that we can access your code, feel free to send an email to `kyle.selman@thekeysupport.com` too in order to give a nudge in the case of the GitHub notification getting lost.

## Next Steps

Once you have finished, we will have a look over your application and essentially give it a mini code review. Once completed, we will invite you back in for a short discussion about what you have done as well as listen to your feedback and any questions you have.
