// Bio & Skills
var bio = {
	"name": "dM",
	"role": "Web developer",
	"contacts":
		{
			"mobile": "+44 (0) 7787 560 995",
			"email": "mazurdv@gmail.com",
			"github": "mazurdv",
			"twitter": "@mazurdv",
			"blog": "blog",
			"location": "London, UK"
		},
	"welcomeMessage": "Welcome to my on-line resume",
	"skills":
		["html", "css", "js", "php", "python", "linux", "postgres"],
	"biopic": "images/biopic.jpg"
	};

bio.display = function() {

	var d = "%data%",
		formattedHeaderName = HTMLheaderName.replace(d, bio.name),
		formattedHeaderRole = HTMLheaderRole.replace(d, bio.role),
		formattedContactGeneric = HTMLcontactGeneric.replace(d, bio.name),
		formattedMobile = HTMLmobile.replace(d, bio.contacts.mobile),
		formattedEmail = HTMLemail.replace(d, bio.contacts.email),
		formattedGithub = HTMLgithub.replace(d, bio.contacts.github),
		formattedTwitter = HTMLtwitter.replace(d, bio.contacts.twitter),
		formattedBlog = HTMLblog.replace(d, bio.contacts.blog),
		formattedLocation = HTMLlocation.replace(d, bio.contacts.location),
		formattedBioPic = HTMLbioPic.replace(d, bio.biopic),
		formattedWelcomeMsg = HTMLwelcomeMsg.replace(d, bio.welcomeMessage),
		formattedSkills = [];

	// header
	$("#header").append(formattedHeaderName,
						formattedHeaderRole,
						formattedBioPic,
						formattedWelcomeMsg,
						HTMLskillsStart)
				.removeAttr("style");

	// skills
	bio.skills.forEach(function(skill) {
		formattedSkills.push(HTMLskills.replace(d, skill));
	});

	$("#skills").append(formattedSkills);

	// top contacts
	$("#topContacts").append(	formattedMobile,
								formattedEmail,
								formattedGithub,
								formattedTwitter,
								formattedBlog,
								formattedLocation)
					.removeAttr("style");

	 // footer
	 $("#lets-connect").removeAttr("style");

	 $("#footerContacts").append(formattedMobile,
								formattedEmail,
								formattedGithub,
								formattedTwitter,
								formattedBlog,
								formattedLocation);

};


// Work
var work = {
	"jobs":
	    [
		    {
				"employer": "Sompo Canopius",
				 "title": "Credit Risk Analyst",
				 "location": "London, UK",
				 "dates": "September 2012 - present",
				 "description": "Description CNP"
	 	 	},
	 	     {
				"employer": "DirectLine Group",
				"title": "Risk Analyst",
				"location": "London, Bromley, UK",
				"dates": "August 2010 - July 2012",
				"description": "Description DLG"
	 	 	}
 	 	]
	};

work.display = function() {

	work.jobs.forEach(function(job) {

	   	var workExperience = $("#workExperience");
		workExperience.append(HTMLworkStart).removeAttr("style");

		var d = "%data%",
			formattedEmployer = HTMLworkEmployer.replace(d, job.employer),
			formattedWorkTitle = HTMLworkTitle.replace(d, job.title),
			formattedLocation = HTMLworkLocation.replace(d, job.location),
			formattedWorkDates = HTMLworkDates.replace(d, job.dates),
			formattedWorkDescription = HTMLworkDescription.replace(d, job.description);

		var workEntry = $(".work-entry:last");

		workEntry.append(
			formattedEmployer + formattedWorkTitle,
			formattedLocation,
			formattedWorkDates,
			formattedWorkDescription);

	});

};

// Projects
var projects = {
	"projects":
		[
			{
				"title": "CIB",
				"dates": "June 2015 - present",
				"description": "Description CIB",
				"images":
					["images/img_1.jpg", "images/img_2.jpg"]
			},
			{
				"title": "CIB copy",
				"dates": "Month1 2010 - Month2 2015",
				"description": "Description CIB copy",
				"images":
					["images/img_3.jpg", "images/img_4.jpg"]
			}
		]
	};

projects.display = function() {

	projects.projects.forEach(function(project){

		var d = "%data%",
			formattedProjectTitle = HTMLprojectTitle.replace(d, project.title),
			formattedProjectDates = HTMLprojectDates.replace(d, project.dates),
			formattedProjectDescription = HTMLprojectDescription.replace(d, project.description),
			formattedProjectImages = [];

		$("#projects").append(HTMLprojectStart).removeAttr("style");

		project.images.forEach(function(image) {
			formattedProjectImages.push(HTMLprojectImage.replace(d, image));
		});

		$(".project-entry:last").append(formattedProjectTitle,
										formattedProjectDates,
										formattedProjectDescription,
										formattedProjectImages);

	});

};

// Education
var education = {
		"schools":
	         [
				{
					"name": "Moscow Institue of Physics and Technology",
					"location": "Moscow, Russia",
					"degree": "MSc",
					"majors": "IT",
					"dates": 2007,
					"url": "https://mipt.ru/en/"
				},
				{
					"name": "National Research University Higher School of Economics",
					"location": "Moscow, Russia",
					"degree": "MSc",
					"majors": "Economics & risk management",
					"dates": 2007,
					"url": "https://www.hse.ru/en/"
				},
				{
					"name": "Moscow Institue of Physics and Technology",
					"location": "Moscow, Russia",
					"degree": "BSc",
					"majors": "Applied maths & physics",
					"dates": 2005,
					"url": "https://mipt.ru/en/"
				}
	          ],
	    "onlineCourses":
			[
				{
					"title": "Front-End Web Developer Nanodegree",
					"school": "Udacity",
					"date": 2016,
					"url": "https://www.udacity.com/"
				},
				 {
					"title": "Web developement",
					"school": "LoftSchool",
					"date": 2015,
					"url": "http://loftschool.com/"
				}
			]
	    };

education.display = function() {

	// schools
	education.schools.forEach(function(school){

		var d = "%data%",
			formattedSchoolName = HTMLschoolName.replace(d, school.name),
			formattedSchoolDegree = HTMLschoolDegree.replace(d, school.degree),
			formattedSchoolDates = HTMLschoolDates.replace(d, school.dates),
			formattedSchoolLocation = HTMLschoolLocation.replace(d, school.location),
			formattedSchoolMajor = HTMLschoolMajor.replace(d, school.majors);

		$("#education").append(HTMLschoolStart).removeAttr("style");

		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree,
									formattedSchoolDates,
									formattedSchoolMajor,
									formattedSchoolLocation);

		$(".education-entry:last a").attr({"href": school.url, "target": "_blank"});

	});

	$("#education").append(HTMLonlineClasses);

	// online courses
	education.onlineCourses.forEach(function(onlineCourse){

		var d = "%data%",
			formattedOnlineTitle = HTMLonlineTitle.replace(d, onlineCourse.title),
			formattedOnlineSchool = HTMLonlineSchool.replace(d, onlineCourse.school),
			formattedOnlineDates = HTMLonlineDates.replace(d, onlineCourse.date),
			formattedOnlineURL = HTMLonlineURL.replace(d, onlineCourse.url);

		$("#education").append(HTMLschoolStart).removeAttr("style");

		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool,
									formattedOnlineDates,
									formattedOnlineURL);

		$(".education-entry:last a").attr({"href": onlineCourse.url, "target": "_blank"});

	});

};

// Add Google Map
function addGoogleMap() {

	$("#mapDiv").append(googleMap).removeAttr("style");

}

// Main loader
$( document ).ready(function() {

    bio.display();
    work.display();
    projects.display();
    education.display();

	addGoogleMap();

});

