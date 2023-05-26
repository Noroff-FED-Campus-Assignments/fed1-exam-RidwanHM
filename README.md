[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/EF97x2Z3)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11024550&assignment_repo_type=AssignmentRepo)

# FED Exam - Vanilla Front-end Website

This bootstrap template is intended to help you deliever a amazing website which delights your end-users. Feel free to change, remove or start your own project from scratch. Please replace any text which starts with an `_`.

This is a vanilla website that displays a list of items fetched from an API.

This project was bootstrapped with Vite.

## Resources

- [Brief](https://fed-vocational-astro-course.vercel.app/en/exam-1/brief)
- [Design](https://www.figma.com/file/J70oTdtt2aaLOdnQLwqqDS/Untitled?type=design&node-id=0%3A1&t=Qnkpz6QQtY13muFL-1)
- [Production deploy](https://venerable-valkyrie-03b402.netlify.app)
- [Deployment CI](https://app.netlify.com/sites/venerable-valkyrie-03b402/overview)
- [API Docs](https://fluffy-line.flywheelsites.com/wp-json/wp/v2/posts/)
- [API Endpoint](https://fluffy-line.flywheelsites.com/wp-json/wp/v2/media/)

## Deployment

Your deployment is done via static hosting provider (Vercel is recommended).
YOu can update your deployment pipeling by editing the [vercel.json](https://vercel.com/docs/concepts/projects/project-configuration).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FS3ak%2Ffed1-exam-vanilla-frontend-website&env=API_TOKEN,API_SECRET&envDescription=The%20API_TOKEN%20is%20needed%20to%20access%20a%20secure%20API%20endpoint.%20This%20can%20be%20the%20Authorization%20%60Bearer%20Token%60%20header%20used%20to%20make%20queries.&envLink=https%3A%2F%2Fvitejs.dev%2Fguide%2Fenv-and-mode.html&project-name=exam-front-end&repository-name=fed1-exam-vanilla-frontend-website&skippable-integrations=1)

## Report

I had a school project that involved creating a headless CMS for a website. We were given the freedom to choose the topic for our website but had some specific criteria to follow. Firstly, we needed to use a platform to host our list and then utilize that list on our website. Additionally, we were required to create a contact form using JavaScript to validate the inputs.
For my project, I wanted to create something that would be interesting for an audience in my age group and reflect my own interests and experiences. Therefore, I decided to make a website about travel destinations, specifically cities that I have personally visited. To begin, I used logo.com to design a logo that suited my website. The logo incorporates "R1," which stands for Ridwan or Rid1, my name.

To create the list, I initially attempted to use my own pictures but encountered difficulties, so I opted to use images from unsplash.com instead. I gathered a list of 12 cities, each accompanied by an image and text describing the city. To generate the text, I utilized openai.com to ensure the content was relevant to each post.
Regarding the design, I aimed for simplicity to make it easy for readers to navigate. I placed a background image of a beach and island on the index page to make it visually appealing, but for the other pages, I avoided using background images to prevent overwhelming the reader. As part of the project criteria, I included a carousel slider on the homepage, which made the list easy to browse.

For coding, I used HTML, CSS, and JavaScript. HTML and CSS were used for styling, while JavaScript was responsible for fetching and displaying the list on my pages. On the homepage, I utilized a carousel slider to showcase the city names and images in a horizontal row with arrow buttons for navigation. The blog page displayed the entire list, initially showing 10 cities, and when the "load more" button was pressed, it revealed additional cities.
During the development process, I encountered a red underline in the carousel code under "new swiper." This issue arose because I used the Swiper library, and there might have been a syntax problem. However, I tested the code and verified its functionality and use openai.com to check. It said that everything was fine and that I should continue, so I ignored the red underline. Some of the images in the list disappeared whenever I made changes, but this was likely related to the WordPress platform rather than an issue with my code. Overall, I did not encounter any major difficulties with my coding or the project itself.

I generated the text for the "About" page using openai.com, which provides information about R1 Travels. Lastly, I implemented a contact form using JavaScript that validated user input, displaying error messages if anything was entered incorrectly.
After completing the coding, I used hotjar.com to track user interactions on my website and identify areas for improvement. I discovered that the filter box was causing issues with the list, so I removed it. I also made CSS improvements to enhance the overall user experience, which is why the appearance of my Figma (design) and actual page may differ slightly.

## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://0.0.0.0:5173/` to view it in the browser.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [ ] A error message is present when the End-user encounters a error while viewing the index page.
- [ ] A error message is present when the End-user encounters a error while viewing the details page.
- [ ] As a customer I can view the title of the item on the browser tab for a details page.
- [ ] As a customer I can view validation message when they input an incorrect name.
- [ ] As a customer I can view validation message when they input an incorrect subject that is less than 15 characters.
- [ ] As a customer I can view validation message when they input an incorrect Email address.
- [ ] As a customer I can view a validation message when they input an incorrect physical address that is less than 25 characters long.
- [ ] As a customer I want to be able to view the latest blog posts on the home page.
- [ ] As a customer, I want to see a list of the first 10 blog posts on the blog section, so that I can quickly scan through the content and decide which posts I want to read.
- [ ] As a customer I want to be able to view a list of all blog posts on the blog section.
- [ ] As a customer I want A responsive website that can be As a customer, I want to ensure that the website is responsive and accessible so that I can access it on any device and easily navigate through it using any accessibility tools I need.
- [ ] As a customer, I want to see a clear and visually appealing design on the website, so that I can easily read the content and engage with the website.
- [ ] As a customer, I want to see a carousel/slider on the home page to display the latest blog posts, so that I can quickly access and view the latest content.
- [ ] As a customer, I want to be able to click on a blog post and be taken to a page with specific details about that post, so that I can get more in-depth information about the topic.
- [ ] As a customer, I want to be able to click on images in a blog post and see a larger version in a modal, so that I can view images in greater detail.
- [ ] As a customer, I want to be able to easily contact the website owners through a contact form, so that I can reach out with any questions or feedback.
- [ ] As a customer, I want to see error messages when I fill out the contact form incorrectly, so that I can correct my mistakes and successfully submit my message.

## End-user success criteria (Optional - 100%)

- [ ] End-user can search for a specific item.
- [ ] End-user can filter the list.
- [ ] End-user can sort list by;
  - [ ] Name ascending order
  - [ ] Name descending order
- [ ] Confirmation modal after custumer submits a successful contact form.
- [ ] End-user can auto-fill the contact form using the browser auto-fill.
- [ ] End-user can auto-fill the contact form using a password manager.
- [ ] Validation still works when End-user uses copy and pastes into input fields.
- [ ] End-user can see a postive feedback when they input correct info and pass validation.
- [ ] End-user can experience pleasant animations.
- [ ] End-user needs to prove there are human using a captcha feature on the contact form.
  - [ ] Each item in the list has a staggered animation.
  - [ ] Contact form success modal fades in.
- [ ] End-user can view a custom favicon.
- [ ] CSS uses variables
- [ ] Code is dry - There are no repeating functions, variables.
- [ ] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [ ] As a stakeholder, I want to view the website analytics.
- [ ] As a stakeholder, I want to show my customers a disclamer on the website, so that they are aware of the terms and conditions of using the website.
- [ ] As a customer, I want to ensure that my personal information submitted through the contact form is kept secure and not shared with any third-party entities.
- [ ] As a customer, I want to be able to sort, filter, or search the blog posts, so that I can quickly find the content that is most relevant to me.
- [ ] As a customer, I want to be able to submit comments on a blog post, so that I can engage with other readers and share my thoughts on the topic.

- [ ] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [ ] Is user-friendly
  - [ ] Effective use of the pillars of design
    - [ ] Typography
    - [ ] Colour
    - [ ] Composition
    - [ ] Art Direction
    - [ ] Motion
  - [ ] Adhered to principles of design
    - [ ] Contrast
    - [ ] Balance and alignment
    - [ ] Emphasis
    - [ ] Proportion
    - [ ] Hiearchy
    - [ ] Repetition
    - [ ] Ryhthem
    - [ ] Pattern
    - [ ] Negative space
    - [ ] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [ ] All pages have a meta description.
- [ ] All pages have a valid title.
- [ ] All pages import the correct css files.
- [ ] All pages import the correct JS file.
- [ ] Details page URL includes a query param.
- [ ] My website makes a GET request to an API to get a list of results.
- [ ] My website makes a GET request to an API to get details of one result.
- [ ] Input fields have the following attributes;
- [ ] All images have an alt tag;
  - [ ] A name,
  - [ ] A placeholder,
  - [ ] A aria-describedby,
  - [ ] Required
- [ ] I have not copied Javascript code.
- [ ] I have not used a Javascript library.
- [ ] Removed all unused files.
- [ ] Named all images properly.
- [ ] Committed all my code to github.
- [ ] My repo is publically viewable.
- [ ] I've submitted/ written a report.
- [ ] I've removed all todo notes in code.
- [ ] I've removed all console logs in code.
- [ ] Code is formatted correctly.
- [ ] There are no red underlines in VSCode.
- [ ] There are no error messages in the terminal when I run the project.
- [ ] My code is indented correctly.
- [ ] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/html-css/module-2/forms

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Ridwan Hashi Mohamud (@RidwanHM)
- Monde Sineke (@S3ak)
