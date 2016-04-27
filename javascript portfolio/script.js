
//these are the functions to make the home page//
function initindex() 
{var content = '';

content += '<head>';
content += '<meta charset="utf-8">';
content += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
content += '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">';
content += '<title>Minimum Bootstrap HTML Skeleton</title>';
content += '<!--  -->';
content += '<style>';
content += '</style>';
content += '</head>';
content += '<body>';

content +='<div id="menu"></div>';
content += '<div class="container">';
content += '<div id="main">';
content += '<div id="titlemain"></div>';
content += '<div id="photo"></div>';
content += '<div id="textmain"></div>';
content += '</div>';
content += '</div>';


content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>';
content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>';
content += '<script src="script.js">';
content += '</script>';
content += '</body>';
 
document.getElementById('html').innerHTML = content;

makeNav();
	
}

function makeNav() 
{
var content = '';

content += '<nav class="navbar navbar-inverse">';
content += '<div class="container-fluid">';
content += '<div class="navbar-header">';
content += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">';
content += '<span class="icon-bar"></span>';
content += '<span class="icon-bar"></span>';
content += '<span class="icon-bar"></span>'; 
content += '</button>';
content += '<a class="navbar-brand" href="index.html">Dan Ross</a>';
content += '</div>';
content += '<div class="collapse navbar-collapse" id="myNavbar">';
content += '<ul class="nav navbar-nav navbar-right">';
content += '<li class="active"><a href="index.html">Home</a></li>';
content += '<li><a href="about.html" onclick="makepages(1)">About</a></li>';
content += '<li><a href="work.html" onclick="makepages(2)">Work</a></li>'; 
content += '<li><a href="contact.html" onclick="makepages(3)">Contact</a></li>'; 
content += '</ul>';
content += '</div>';
content += '</div>';
content += '</nav>';

document.getElementById('menu').innerHTML = content;
	
makehomeTitle();
}

function makehomeTitle()
{
	
var content = '';

content += '<div class="row">';
content += '<h1 class="text-center">Hi, I\'m Dan!</h1>';
content += '</div>';

document.getElementById('titlemain').innerHTML = content;
	
makeImage();
}

function makeImage() 
{

var content = '';

content+= '<div class="row">';
content += '<img class="img img-circle img-responsive center-block" src="images/dan.jpeg"/>';
content += '</div>';

document.getElementById('photo').innerHTML = content;
	
makehomeText();

}

function makehomeText() 
{
var content= ' ';
content+= '<div class="row">';
content+= '<h1 class="text-center">A brief background</h1>';
content+= '<p class="text-center">Having graduated with a bachelor\'s degree in environmental studies in May 2015, my exposure to the world of technology was limited. Upon accepting a job as a Business Systems Analyst at MetLife in Denver, Colorado, I soon became fascinated by the web design and software development occuring in my office.</p>';
content+= '<p class="text-center">Having always had passions for design, conceptualization, and construction, within little time at MetLife I knew I wanted to learn to code. In April of 2016, I began learning the JavaScript-based MEAN stack through the CodeCraft School of Technology- a 20 week part time coding bootcamp based in Boulder, CO.</p>';
content+= '</div>';

document.getElementById('textmain').innerHTML = content;
}

//this is the function to make the different pages//
function makepages(pagenumber) 
{
if (pagenumber === 1) {
initabout();
}
if (pagenumber === 2) {
initwork();
}
if (pagenumber === 3) {
initcontact();
}
}


//these are the functions for the about page//
function initabout() 
{
var content = '';

content += '<head>';
content += '<meta charset="utf-8">';
content += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
content += '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">';
content += '<title>Minimum Bootstrap HTML Skeleton</title>';
content += '<!--  -->';
content += '<style>';
content += '</style>';
content += '</head>';
content += '<body>';

content += '<div id="menu"></div>';
content += '<div class="container">';
content += '<div id="main">';
content += '<div id="titlemain"></div>';
content += '<div id="photo"></div>';
content += '<div id="textmain"></div>';
content += '</div>';
content += '</div>';


content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>';
content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>';
content += '<script src="script.js">';
content += '</script>';
content += '</body>';
 
document.getElementById('html_about').innerHTML = content;

makeNavabout();
	
}

function makeNavabout() 
{
var content = '';

content += '<nav class="navbar navbar-inverse">';
content += '<div class="container-fluid">';
content += '<div class="navbar-header">';
content += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">';
content += '<span class="icon-bar"></span>';
content += '<span class="icon-bar"></span>';
content += '<span class="icon-bar"></span>'; 
content += '</button>';
content += '<a class="navbar-brand" href="index.html">Dan Ross</a>';
content += '</div>';
content += '<div class="collapse navbar-collapse" id="myNavbar">';
content += '<ul class="nav navbar-nav navbar-right">';
content += '<li class="active"><a href="index.html">Home</a></li>';
content += '<li><a href="about.html" onclick="makepages(1)">About</a></li>';
content += '<li><a href="work.html" onclick="makepages(2)">Work</a></li>'; 
content += '<li><a href="contact.html" onclick="makepages(3)">Contact</a></li>'; 
content += '</ul>';
content += '</div>';
content += '</div>';
content += '</nav>';

document.getElementById('menu').innerHTML = content;
	
makehomeTitleabout();
}

function makehomeTitleabout()
{
	
var content = '';

content += '<div class="row">';
content += '<h1 class="text-center">About</h1>';
content += '</div>';

document.getElementById('titlemain').innerHTML = content;
	
makeImageabout();
}

function makeImageabout() 
{

var content = '';

content+= '<div class="row">';
content += '<img class="img img-responsive img-rounded center-block" src="images/amherst.png"/>';
content += '</div>';

document.getElementById('photo').innerHTML = content;
	
makehomeTextabout();

}

function makehomeTextabout() 
{
var content = '';
	
content+= '<div class="row" id="amherst">';
content+= '<h3 class="text-center" id="text1"><i>In May of 2015 I graduated from</i></h3>';
content+= '<h1 class="text-center" id="text2">AMHERST COLLEGE</h1>';
content+= '</div>';

document.getElementById('textmain').innerHTML = content;
}

//these are the functions for the work page//
function initwork() {
var content = '';

content += '<head>';
content += '<meta charset="utf-8">';
content += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
content += '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">';
content += '<title>Minimum Bootstrap HTML Skeleton</title>';
content += '<!--  -->';
content += '<style>';
content += '</style>';
content += '</head>';
content += '<body>';

content += '<div id="menu"></div>';
content += '<div class="container">';
content += '<div id="main">';
content += '<div id="titlemain"></div>';
content += '<div id="photo"></div>';
content += '<div id="textmain"></div>';
content += '</div>';
content += '</div>';


content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>';
content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>';
content += '<script src="script.js">';
content += '</script>';
content += '</body>';
 
document.getElementById('html_work').innerHTML = content;

makeNavwork();
	
}

function makeNavwork() {
var content = '';

content += '<nav class="navbar navbar-inverse">';
content += '<div class="container-fluid">';
content += '<div class="navbar-header">';
content += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">';
content += '<span class="icon-bar"></span>';
content += '<span class="icon-bar"></span>';
content += '<span class="icon-bar"></span>'; 
content += '</button>';
content += '<a class="navbar-brand" href="index.html">Dan Ross</a>';
content += '</div>';
content += '<div class="collapse navbar-collapse" id="myNavbar">';
content += '<ul class="nav navbar-nav navbar-right">';
content += '<li class="active"><a href="index.html">Home</a></li>';
content += '<li><a href="about.html" onclick="makepages(1)">About</a></li>';
content += '<li><a href="work.html" onclick="makepages(2)">Work</a></li>'; 
content += '<li><a href="contact.html" onclick="makepages(3)">Contact</a></li>'; 
content += '</ul>';
content += '</div>';
content += '</div>';
content += '</nav>';

document.getElementById('menu').innerHTML = content;
	
makehomeTitlework();
}

function makehomeTitlework()
{
	
var content = '';

content += '<div class="row">';
content += '<h1 class="text-center">My Work Experience</h1>';
content += '</div>';

document.getElementById('titlemain').innerHTML = content;

makeTextwork();
}

function makeTextwork()
{
var content = '';
	
content +='<div class="container">';
content +='<div class="row">';
content +='<h3><u><b>WORK EXPERIENCE</b></u></h3>';
content +='<div class="col-md-4">';
content +='<h3>METLIFE</h3>';
content +='<p>Greenwood Village, CO</p>';
content +='<p><i>BUSINESS SYSTEMS ANALYST</i></p>';
content +='<p>July 2015 - Present</p>';
content +='</div>';
content +='<div class="col-md-8">';
content +='<ul>';
content +='<li>Led SalesForce.com integration with MetLife Customer Service Center applications by designing data flows and mapping functional requirements</li>';
content +='<li>Designed and developed MetLife\'s newest retail annuity product offering: MetLife Fixed Index Annuity Products</li>';
content +='<li>Analyzed existing annuity and client-facing correspondence systems and operations to help implement new processes for MetLife\'s North American retail annuity business</li>';
content +='<li>Developed a daily newsletter that provides overnight updates on the insurance industry, annuities, and market events</li>';
content +='</ul>';
content +='</div>';
content +='</div>';
content +='<div class="row">';
content +='<div class="col-md-4">';
content +='<h3>GOLDMAN SACHS</h3>';
content +='<p>New York, NY</p>';
content +='<p><i>SALES AND TRADING SUMMER ANALYST</i></p>';
content +='<p>June 2014 - August 2014</p>';
content +='</div>';
content +='<div class="col-md-8">';
content +='<ul>';
content +='<li>Rotated on Commodities Sales and Trading, Municipal (Muni) Bond Sales, and US Shares Sales desks</li>';
content +='<li>Presented research on US Strategic Petroleum Reserve, Alaskan oil indusry, and US Shale Revolution</li>';
content +='<li>Pitched NJ State Turnpike Authority bond; investigated Puerto Rico\'s debt crisis and its effects on Muni market</li>';
content +='<li>Pitched Six Flags Entertainment (SIX) as long; produced daily updated on overnight technology events</li>';
content +='</ul>';
content +='</div>';
content +='</div>';
content +='<div class="row">';
content +='<div class="col-md-4">';
content +='<h3>CAC ATTIRE</h3>';
content +='<p>Amherst, MA</p>';
content +='<p><i>FOUNDER AND PRESIDENT</i></p>';
content +='<p>September 2011 - May 2015</p>';
content +='</div>';
content +='<div class="col-md-8">';
content +='<ul>';
content +='<li>Founded clothing brand catered to 11 NESCAC (New England Small College Athletic Conference) schools</li>';
content +='<li>Increased sales by 300% within brand\'s first two years by establishing team of student representatives at each of NESCAC schools and through promotional campaign using social media such as Facebook and Twitter</li>';
content +='<li>Designed graphics for products using programs such as Adobe Illustrator and Photoshop</li>';
content +='<li>Launched clothing brand, ADDX, in 2008, and sold products throughout retailers in New England and New York, as well as developed promotional gear for musicians Chris Webby and Connor Youngblood, and Olympic slopestyle silver medalist Devin Logan</li>';
content +='</ul>';
content +='</div>';
content +='</div>';
content +='<div class="row">';
content +='<h3><u><b>EDUCATION</b></u></h3>';
content +='<div class="col-md-4">';
content +='<h3>AMHERST COLLEGE</h3>';
content +='<p>Amherst, MA</p>';
content +='</div>';
content +='<div class="col-md-8">';
content +='<p><i>BACHELOR OF ARTS IN ENVIRONMENTAL STUDIES WITH AN ECONOMICS CONCENTRATION</i></p>';
content +='<p>May 2015; GPA: 3.6/4.0</p>';
content +='</div>';
content +='</div>';
content +='<div class="row">';
content +='<div class="col-md-4">';
content +='<h3>CHARLES UNIVERSITY</h3>';
content +='<p>Prague, Czech Republic</p>';
content +='</div>';
content +='<div class="col-md-8">';
content +='<p><i>STUDY ABROAD IN CENTRAL EUROPEAN STUDIES</i></p>';
content +='<p>September 2013 - December 2014; GPA: 3.5/4.0</p>';
content +='</div>';
content +='</div>';
content +='<div class="row">';
content +='<div class="col-md-4">';
content +='<h3>HOPKINS SCHOOL</h3>';
content +='<p>New Haven, CT</p>';
content +='</div>';
content +='<div class="col-md-8">';
content +='<p><i>DIPLOMA</i></p>';
content +='<p>June 2011; GPA: 3.5/4.0; ACT: 33; AP Scholar with Honor</p>';
content +='</div>';
content +='</div>';
content +='<div class="row">';
content +='<h3><u><b>ADDITIONAL SKILLS</b></u></h3>';
content +='<div class="col-md-12">';
content +='<p>COMPUTER: HTML, CSS, Bootstrap, SQL, Microsoft Office, Adobe Illustrator, Adobe Photoshop</p>';
content +='<p>LANGUAGE: Conversational proficiency in Spanish</p>';
content +='</div>';
content +='</div>';
content +='</div>';

document.getElementById('textmain').innerHTML = content;
}


//these are the functions for the contact page//
function initcontact() {
var content = '';

content += '<head>';
content += '<meta charset="utf-8">';
content += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
content += '<link rel="stylesheet" media="screen" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css">';
content += '<title>Minimum Bootstrap HTML Skeleton</title>';
content += '<!--  -->';
content += '<style>';
content += '</style>';
content += '</head>';
content += '<body>';

content += '<div id="menu"></div>';
content += '<div class="container">';
content += '<div id="main">';
content += '<div id="titlemain"></div>';
content += '<div id="photo"></div>';
content += '<div id="textmain"></div>';
content += '</div>';
content += '</div>';


content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>';
content += '<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js"></script>';
content += '<script src="script.js">';
content += '</script>';
content += '</body>';
 
document.getElementById('html_contact').innerHTML = content;

makeNavcontact();
	
}

function makeNavcontact() {
var content = '';

content += '<nav class="navbar navbar-inverse">';
content += '<div class="container-fluid">';
content += '<div class="navbar-header">';
content += '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">';
content += '<span class="icon-bar"></span>';
content += '<span class="icon-bar"></span>';
content += '<span class="icon-bar"></span>'; 
content += '</button>';
content += '<a class="navbar-brand" href="index.html">Dan Ross</a>';
content += '</div>';
content += '<div class="collapse navbar-collapse" id="myNavbar">';
content += '<ul class="nav navbar-nav navbar-right">';
content += '<li class="active"><a href="index.html">Home</a></li>';
content += '<li><a href="about.html" onclick="makepages(1)">About</a></li>';
content += '<li><a href="work.html" onclick="makepages(2)">Work</a></li>'; 
content += '<li><a href="contact.html" onclick="makepages(3)">Contact</a></li>'; 
content += '</ul>';
content += '</div>';
content += '</div>';
content += '</nav>';

document.getElementById('menu').innerHTML = content;
	
makehomeTitlecontact();
}

function makehomeTitlecontact()
{
	
var content = '';

content += '<div class="row">';
content += '<h1 class="text-center">Contact</h1>';
content += '</div>';

document.getElementById('titlemain').innerHTML = content;
	
makehomeTextcontact();
}

function makehomeTextcontact() {
var content = '';

content+= '<div class="col-md-4 col-md-offset-4">'
content+= '<div class="container">';
content+= '<form>';
content+= '<br>';
content+= '<label>Your Name</label>';
content+= '<input type="text" name="name" id="value" placeholder="" />';
content+= '<br/>';
content+= '<label>Your Email</label>';
content+= '<input type="text" name="name" id="value" placeholder="" />';
content+= '<br/>';
content+= '<label>Shoot me a line!</label>';
content+= '<br/>';
content+= '<textarea name="message" id="msg">';
content+= '</textarea>';
content+= '<br/>';
content+= '<input type="submit" value="Click here" />';
content+= '</form>';
content+= '<br>';
content+= '</div>';
content+= '</div>';

document.getElementById('textmain').innerHTML = content;
}
