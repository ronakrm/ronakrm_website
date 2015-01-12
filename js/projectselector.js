var animate_time = 500;

var main = function () {
	var hash = window.location.hash;
	$('#project-list p').click(function (project) {
        show_project(this);
    });
	if (hash.length != 0) {
		var dash = "-";
		var proj_link = document.getElementById(dash.concat(hash.slice(1)));
		show_project(proj_link);
	}
};

var show_project = function(project) {

    //hide previously selected in title
    var project_titles = document.getElementById("project-title").firstElementChild.children;
    for (var i = 0; i < project_titles.length; i++) {
		if ($(project_titles[i]).is(':visible')) {
    		$(project_titles[i]).fadeOut(0);	
    	}
	}
	
	//hide previously selected in details
	var all_projects = document.getElementById("selected-project").firstElementChild.children;
    for (var i = 0; i < all_projects.length; i++) {
		if ($(all_projects[i]).is(':visible')) {
    		$(all_projects[i]).hide(animate_time);	
    	}
	}
    
    //unhighlight a previous project in list
    if ($(project).hasClass('selected')) {
    	$("#t-default").fadeIn(animate_time);
		$("#default").show(animate_time);
		$(project).removeClass('selected');
		history.pushState(null, null, "#");
		return;
    } else {
        var project_links = project.parentElement.children;
        for (i = 0; i < project_links.length; i++) {
			if ($(project_links[i]).hasClass('selected')) {
        		$(project_links[i]).removeClass('selected');	
        	}
        }
    }
   
    //highlight name in list
    $(project).addClass('selected');
    
    var pound = "#";
    
    //display title content
    var title_pref = "#t-";
    var proj_title = title_pref.concat(project.id.substr(1));
    $(proj_title).fadeIn(animate_time);
	
	//display details content
	var proj = pound.concat(project.id.substr(1));
	$(proj).show(animate_time);
	
	history.pushState(null, null, proj);
};

$(document).ready(main);
