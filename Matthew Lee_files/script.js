/**
 *    _  _             __ _   _                _  _                   
 *   | || |   _  _    / _` | | |_       o O O | || |   __ _    _ _    
 *   | __ |  | +| |   \__, | | ' \     o      | __ |  / _` |  | ' \   
 *   |_||_|   \_,_|   |___/  |_||_|   TS__[O] |_||_|  \__,_|  |_||_|  
 *  _|"""""|_|"""""|_|"""""|_|"""""| {======|_|"""""|_|"""""|_|"""""| 
 *  "`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-' 
 *
 *   hughhan.me/script.js
 *   Hugh Han
 *   Last Edited: 29 April 2016
 */

function linkedinOnHover(x) {
	x.style.opacity = "0.7";
	x.style.filter  = 'alpha(opacity=700)';
}

function cameraOnHover(x) {
    x.style.opacity = "0.7";
    x.style.filter  = 'alpha(opacity=700)';
}

function githubOnHover(x) {
    x.style.opacity = "0.7";
    x.style.filter  = 'alpha(opacity=700)';
}

function resumeOnHover(x) {
    x.style.opacity = "0.7";
    x.style.filter  = 'alpha(opacity=700)';
}

function restore(x) {
    x.style.opacity = "1";
    x.style.filter  = 'alpha(opacity=100)';
}

function showIntroText() {
    $("#intro-text-div").animate({opacity: 1}, "slow");
    $("#intro-text").css('visibility', 'visible');
}

function showIcons() {
    $("#icons").animate({opacity: 1}, "slow");

    $("#linkedin").css('visibility', 'visible');
    $("#camera").css('visibility', 'visible');
    $("#github").css('visibility', 'visible');
    $("#resume").css('visibility', 'visible');
}

function pulsate(element, speed) {
    $(element || this).animate({ opacity: 0.1 }, 1000, function() {
        $(this).animate({ opacity: 1 }, 1000,  pulsate);
    });
}

$(document).ready(function() {

    /* Load webpage with intro text all icons hidden. */
    $("#intro-text").css('visibility', 'hidden');
    $("#linkedin").css('visibility', 'hidden');
    $("#camera").css('visibility', 'hidden');
    $("#github").css('visibility', 'hidden');
    $("#resume").css('visibility', 'hidden');
    $("#aboutme").css('visibility', 'hidden');
    $("#updates").css('visibility', 'hidden');

    /* After a timeout, show the intro text and all icons. */
    setTimeout(function() { showIntroText() }, 900);
    setTimeout(function() { showIcons() }, 1800);

    $('#intro-text').delay(900).animate({opacity: 1});
    $('#developer').delay(900).animate({opacity: 1});
    $('#photographer').delay(1800).animate({opacity: 1});     

    /* Function to animate photos when they are hovered over. */
    $('.portfolio-item').hover( function() {
        $(this).find('.img-title').stop(true, true).fadeIn(300);
    }, function() {
        $(this).find('.img-title').stop(true, true).fadeOut(100);
    });
});