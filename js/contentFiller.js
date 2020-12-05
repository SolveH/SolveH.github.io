const $calGlyph = '<span class="glyphicon glyphicon-calendar"></span>';
const $wrenchGlyph = '<span class="glyphicon glyphicon-wrench"></span>';

const itProjects = [
  {
    title: "Using Virtual Reality for Artificial Intelligence Education",
    piclink: "pictures/master_thesis.png",
    link: "https://github.com/SolveH/deep-learning-intro-in-VR",
    time: "September 2019 - July 2020",
    tools: "Unity, Oculus Quest, VRTK, Oculus Integration SDK",
    description:
      "<p>For my master thesis I developed a Virtual Reality application for the Oculus Quest, where " +
      "AI students can get an introduction to deep learning and neural networks in an escape room environment. " +
      "The students walk around in different rooms in VR, having 6DoF in the Oculus Quest, which makes the experience " +
      "highly immersive. I developed the application using Unity and my master thesis was met with interest. " +
      "I also wrote an extended abstract for the HELMeTO2020 conference in Italy, where I presented my work. " +
      "The project was graded with an A, and the full paper paper was accepted as well, and will be published as a Springer paper.</p > ",
  },
  {
    title: "Sammen om en jobb, Accenture Summer Internship",
    piclink: "pictures/SAJO_logo.png",
    link: "https://www.sammenomenjobb.no/",
    time: "24. June - 2. August 2019",
    tools:
      "Salesforce, Salesforce Community, Apex, SOQL, Lightning Components, HTML, CSS",
    description:
      "<p> Through my 6 week long summer internship in Accenture me and my team worked with a mentoring " +
      "organization, developing a new system for managing mentors and mentees in Salesforce. We tailored the Salesforce Non-Profit Cloud " +
      "to let them manage the mentoring programs. We developed declaratively in Salesforce, defining the data model and " +
      "using the standard components to their fullest, but also developed custom Ajax backend logic (similar to Java) " +
      "and Ligthing Components, which are similar to React components. In addition to the CRM we developed for the organization, " +
      "we developed a solution in Salesforce Community, where mentors and mentees can follow up their mentoring programs. " +
      "The solution went live February 2020. </p>",
  },
  {
    title: "Fiolen",
    piclink: "pictures/fiolen.png",
    link: "https://www.fiolen.no",
    time: " January 2016",
    tools: " HTML, CSS, JavaScript, jQuery, Bootstrap 4",
    description:
      "<p>My mother runs a gift shop in Stryn. I have worked there multiple summers and since my 2nd year of " +
      "computer science I have been developing the shop`s websites. I have developed and designed the different websites and " +
      "tried to use third-party components when possible. I am also administering the hosting of the web pages and " +
      "the shop`s email solution at G Suite.</p>",
  },
  {
    title: "Weebo",
    piclink: "pictures/weebologo.jpg",
    link: "https://github.com/roman-bachmann/ProjectWeebo",
    time: " Spring 2017",
    tools: " React, node.js, SQL, Bootstrap, CSS",
    description:
      "<p>Through my 4th semester at NTNU we had a project course called <a href='https://www.ntnu.no/studier/emner/TDT4140'>Software Engineering</a>. In the project we had a huge focus on the working process, and learned a lot by executing the development process in a realistic way. The goal in this project was to create something that would improve the way of learning in universities." +
      "<br />" +
      "Weebo is a learning platform where students are supposed to effectively find the best videos for any subchapter in a course. By letting teachers add chapters and associated subchapters to their course, and then allowing anyone related to the subject to share and vote videos for every subchapter, we created a product that could prove to be useful in many courses. Our student assistants, professors, ourselves and many others was pleased our product, so we got a product and a grade we are" +
      "satisfied with. " +
      "<br />" +
      "To learn something new we used React, and saw that it proved to be very useful and efficient for designing user interfaces. We had a course about databases in the same semester, so we got familiar with using mySQL and backend with node.js in practice.</p>",
  },
  {
    title: "Four seasons project",
    piclink: "pictures/seasons.png",
    link: "seasons/index.html",
    time: " 11.-24. september 2017",
    tools: " HTML, CSS, JavaScript, jQuery, node.js",
    description:
      "<p>In my 5th semester at NTNU I took a course called <a href='https://www.ntnu.no/studier/emner/IT2810'>Web Development</a>. It's is a very practical, project-based course where we learned a lot about web development. First we had a project where we used basic HTML, CSS and JavaScript and had requirements about things like using CSS Flexbox. In our second project we made a website about seasons. We chose the theme ourselves, because the only requirement about theme was that we had to make a website for something we are grateful for. We created a website we think is beautiful, and it has many clever solutions. After this project we had a project where we used React and HTML LocalStorage. For the fourth and last project we used Angular.js with node.js. We launched all of our projects on a Linux server at NTNU.</p>",
  },
  {
    title: "Battery Management Systems",
    piclink: "pictures/bmsys.jpg",
    link: "http://folk.ntnu.no/martlun/final_edition/index/index.html#",
    time: " Autumn 2015",
    tools: " HTML, CSS, JavaScript, Bootstrap",
    description:
      "<p>Already in my first semester at NTNU we had a project in <a href='https://www.ntnu.no/studier/emner/IT2805'>Web Technologies</a>, which is a course where we learned the basics about web development with HTML, CSS and JavaScript. In this project all of us worked on the different parts of the website, but I made things like the picture slide. Our customer was satisfied with the design of the website, and a member of our group was hired to keep developing the website.</p>",
  },
];
const hobbyProjects = [
  {
    title: "Lada",
    piclink: "pictures/partyplace.jpg",
    link: "",
    time: " Since easter 2015",
    tools: " Hammer, screw driver, jigsaw, paint, material, money etc.",
    description:
      "<p>I love building and creating things matching my own interests in plans and projects. At home I've spent my summer spare time building my own party place in an old barn. I want the style to renew old things in a cool way so I've used older materials for my bar, a long table made of an old seeder for horses and collected antique objects like old orange/ explosive crates, sacks from WW2, walls covered with wooden skiis etc. The party place is always under development, and I always come up with new ideas. </p>",
  },
  {
    title: "Arduino projects",
    piclink: "pictures/arduino.png",
    link: "",
    time: " Any time",
    tools: " Arduino + any necessary sensors/parts",
    description:
      "<p> After I had the course programming lab where we had a Zumo bot challenge where we achieved the 2nd place in the competition after hours of work on the code together with other assignments we had, I realized having Arduino projects is really fun. At home I've used my Arduino to make apps for collecting all my IR devices into one device, and I've had plans for making a self-watering plant system. Of course waiting for the parts I order on Ebay forces me to delay these plans, so I have many pending projects.</p>",
  },
];

fillWithProjects("#itprojects", itProjects);
fillWithProjects("#personalprojects", hobbyProjects);

function fillWithProjects(projectTypeId, projects) {
  var $projectSection = $(projectTypeId);
  for (var i = 0; i < projects.length; i++) {
    //Containing div for the current project with container row
    var $projectContainer = $("<div>", { class: "container project" });
    var $row = $("<div>", { class: "row" });

    //Left column for picture
    var $col1 = $("<div>", { class: "col-sm-5" });
    var $img = $("<img>", { src: projects[i].piclink });
    $col1.append($($img));
    $row.append($($col1));

    //Right column with all project info
    var $col2 = $("<div>", { class: "col-sm-7" });
    var $projectName = $("<h4>", { class: "media-heading" });
    var $projectLink;
    //Since the hobby projects does not have a link they are added inside paragraphs only
    if (projects[i].link.length > 0) {
      $projectLink = $("<a>", { href: projects[i].link }).text(
        projects[i].title
      );
    } else {
      $projectLink = $("<p>").text(projects[i].title);
    }
    $projectName.append($projectLink);
    $col2.append($($projectName));
    //Add the time the project was created with the calendar glyphicon
    var $projectTime = $("<p>", { class: "projecttime" });
    $projectTime.append($calGlyph + projects[i].time);
    $col2.append($projectTime);

    //Add the tools that were used to create the project with wrench glyphicon
    var $projectTools = $("<p>", { class: "projecttime" });
    $projectTools.append($wrenchGlyph + projects[i].tools);
    $col2.append($projectTools);

    /*Add description. Some descriptions have multiple paragraphs so the
        description is added with paragraphs and everything. */
    $col2.append(projects[i].description);

    $row.append($($col2));

    $projectContainer.append($($row));
    $projectSection.append($($projectContainer));
  }
}
