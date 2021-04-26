
// Chrome/Firefox/MSIE/Opera
function get_browser()
{
	s = GetBrowser();
	s = s.split(' ');
	return s[0];
}
function get_version()
{
	s = GetBrowser();
	s = s.split(' ');
	return s[1];
}
function GetBrowser()
{
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'MSIE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\bOPR\/(\d+)/)
        if(tem!= null) return 'Opera '+tem[1];
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
}
function GetOS()
{
	var OSName="unknown";
	if( navigator.appVersion.indexOf("Win")!=-1 ) 	OSName="Windows";
	if( navigator.appVersion.indexOf("X11")!=-1 ) 	OSName="UNIX";
	if( navigator.appVersion.indexOf("Linux")!=-1 ) OSName="Linux";
	if( navigator.appVersion.indexOf("Mac")!=-1 ) 	OSName="MacOS";
	if( navigator.userAgent.match(/Android/i) )		OSName="Android";
	if( navigator.userAgent.match(/iPhone|iPad|iPod/i) ) OSName="iOS";
	return OSName;
}
function GetFileName(file)
{
	i0 = file.lastIndexOf('/');
	i1 = file.lastIndexOf('\\');
	if( i0>i1 ) i1=i0;
	//if( i1==-1) i1=0;
	i1++;
	i2 = file.lastIndexOf('.');
    name = file.substring(i1,i2) || file;
    return name;
}
function GetFileExt(file)
{
	var ext = file.substring(file.lastIndexOf('.'));
	return ext;
}

function ShortBtn()
{
	var x,y,s;
	x = $(window).width()-400;
	y = 20;
	//$("#short_div").popup("option", "arrow", "l,t,r,b");
	$("#short_div").popup("open",{ arrow:true, x:x, y:y });
	var browser = get_browser();
	var os = GetOS();
	if( os=="iOS" )
	{
		s="Add to home screen:\n";
		s+="<ol>";
		s+="<li>Click the Share button&nbsp&nbsp<img src=\"/lib/icons/glyphicons_all/glyphicons_halflings/glyphicons_halflings_065_share.png\">.</li>";
		s+="<li>Select <b>Add to Home Screen</b>.</li>";
		s+="</ol>";
	}
	else if( os=="Android" )
	{
		s="Add to home screen:\n";
		s+="<ol>";
		s+="<li>Click the Settings button&nbsp&nbsp<img src=\"/lib/icons/glyphicons_all/glyphicons_halflings/glyphicons_halflings_011_3dot.png\">.</li>";
		s+="<li>Click the Star button&nbsp&nbsp<img src=\"/lib/icons/glyphicons_all/glyphicons_halflings/glyphicons_halflings_006_star-empty.png\">.</li>";
		s+="<li>Select <b>Add shortcut to home screen</b>.</li>";
		s+="</ol>";
	}
	else if( browser=='Chrome' )
	{
		s="Add to taskbar:\n";
		s+="<ol>";
		s+="<li>Click the Chrome menu <img src=\"//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.3/images/icons-png/bars-black.png\">.</li>";
		s+="<li>Click <b>More Tools</b>.</li>";
		s+="<li>Add the page:<ul>";
		s+="<li>Windows: Click <b>Add to taskbar</b>.</li>";
		s+="<li>Linux: Click <b>Add to desktop</b>.</li>";
		s+="</ul></li>";
		s+="<li>Check <b>Open as window</b>.</li>";
		s+="</ol>";
	}
	else if( browser=='Firefox' )
	{
		s="Add to desktop:\n";
		s+="Drag the address bar icon <img src=\"/lib/icons/glyphicons_all/glyphicons_halflings/glyphicons_halflings_134_globe.png\"> to the desktop.";
	}
	$("#short_div").html(s);
}