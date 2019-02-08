'use strict';

interface ProjectsFactory {
	getProjects(): Project[]
}

app.factory('ProjectsFactory', function(): ProjectsFactory {
	let projects: Project[] = [
		{
			title: "Erstellung von Jahresabschlüssen",
			customer: "Deutsche Telekommunikationsgesellschaft",
			description: "In einem Vorprojekt eine Software entwickelt um Jahresabschlüsse für Leasingverträge zu erstellen. Für eine weltweit operierende Telekommunikationsgesellschaft wurden Zusatzprodukte entwickelt, um die verbundenen Prozesse zu unterstützen.",
			location: "Hamburg",
			languages: ["Deutsch", "Englisch"],
			typeOfProject: "Scrum",
			isTopProject: true,
			
			typeOfSoftware: "Web",
			start: new Date(2019, 1),
			end: null,
			roles: [ "Developer" ],
			technicalLanguages: [ "C#", "HTML", "CSS", "JavaScript" ],
			frameworks: [ "ASP.NET MVC", "ASP.NET WebAPI", "KendoUI", "Entity Framework", "Swagger", "AngularJS", "Bootstrap", "MEF", "JQuery", "OData" ],
			software: [ "Visual Studio", "TFS" ]
		},
		{
			title: "Verwaltung von Leasingverträgen",
			customer: "Deutsche Wirtschaftsprüfung mit Sitz in Hamburg",
			description: "Für eine Wirtschaftsprüfungsgesellschaft wurde eine Leasing-Software entwickelt. Die Anwendung dient zur Berechnung von Leasingverträgen nach bestehenden und aufkommenden Rechnungsstandards. Sie wird je nach Kunde entweder über eine Weboberfläche, oder über eine REST Schnittstelle verwendet.",
			location: "Hamburg",
			languages: ["Deutsch", "Englisch"],
			typeOfProject: "Scrum",
			isTopProject: true,
			
			typeOfSoftware: "Web",
			start: new Date(2017, 6),
			end: new Date(2018, 6),
			roles: [ "Developer", "Technischer Ansprechpartner" ],
			technicalLanguages: [ "C#", "HTML", "CSS", "JavaScript" ],
			frameworks: [ "ASP.NET MVC", "ASP.NET WebAPI", "KendoUI", "Entity Framework", "Swagger", "AngularJS", "Bootstrap", "MEF", "JQuery", "OData" ],
			software: [ "Visual Studio", "TFS" ]
		},
		{
			title: "Planung von Instagram Beiträgen",
			customer: "Startup",
			description: "Im Rahmen eines Startupprojektes wurde eine Web-Appliaktion entwickelt, mit der man das Veröffentlichen von Instagram Beiträgen automatisieren und verienfachen kann.",
			location: "Hamburg",
			languages: ["Deutsch"],
			typeOfProject: "Einmannprojekt",
			
			typeOfSoftware: "Web",
			start: new Date(2017, 3),
			end: new Date(2017, 5),
			roles: [ "Developer", "Product Owner", "Software Architect" ],
			technicalLanguages: [ "C#", "HTML", "CSS", "JavaScript", "SQL", "Razor", "TypeScript" ],
			frameworks: [ "ASP.NET MVC", "ASP.NET WebAPI", "Entity Framework", "AngularJS", "JQuery" ],
			software: [ "Visual Studio", "NodeJS" ]
		},
		{
			title: "Medizinisches Patienten Monitoring Dashboard",
			customer: "Hersteller medizinischer Geräte aus Lübeck",
			description: "Für einen Deutschen Hersteller von Medizintechnik wurde ein Dashboard entwickelt, das die Messdaten diverser medizinischer Geräte visualisiert. Das Dashboard dient zur Unterstützung von Krankenschwestern und Ärzten in Krankenhäusern. Das Projekt wurde in englischer Sprache mit einem zweigeteilten Team in Deutschland und den USA durchgeführt.",
			location: "Lübeck",
			languages: ["Englisch"],
			typeOfProject: "Scrum",
			
			typeOfSoftware: "Desktop",
			start: new Date(2017, 1),
			end: new Date(2017, 2),
			roles: [ "Developer" ],
			technicalLanguages: [ "C#", "XAML" ],
			frameworks: [ "UWP - Universal Windows Platform", "XUnit" ],
			software: [ "Visual Studio", "Jira", "Jenkins" ]
		},
		{
			title: "CRM für Spendenverein",
			customer: "Deutscher Spendenverein für Flüchtlinge",
			description: "Für einen Deutschen Spendenverein für Flüchtlinge wurde ein neues CRM System gebaut. Das System unterstützt den Verein präimar bei der Kundengewinnung und -verwaltung.",
			location: "Hamburg",
			languages: ["Deutsch"],
			typeOfProject: "Scrum",
			
			typeOfSoftware: "Web",
			start: new Date(2017, 0),
			end: new Date(2017, 0),
			roles: [ "Developer" ],
			technicalLanguages: [ "HTML", "CSS", "JavaScript" ],
			frameworks: [ "Microsoft Dynamics CRM 2016", "JQuery" ],
			software: [ "Visual Studio" ]
		},
		{
			title: "Bestell-Verwaltung für Zulieferer eines französischen Flugzeugherstellers",
			customer: "Französischer Flugzeughersteller",
			description: "Die Lieferantenverwaltung eines französischen Flugzeugherstellers wurde modernisiert und erweitert. Mit dem Webtool werden Bestellungen von Zulieferern verwaltet und überwacht.",
			location: "Hamburg",
			languages: ["Deutsch"],
			typeOfProject: "Einmannprojekt",
			isTopProject: true,
			
			typeOfSoftware: "Web",
			start: new Date(2016, 8),
			end: new Date(2016, 11),
			roles: [ "Developer" ],
			technicalLanguages: [ "C#", "JavaScript" ],
			frameworks: [ "Microsoft Reporting Services", "ASP.NET WebForms" ],
			software: [ "Visual Studio", "Oracle" ]
		},
		{
			title: "Verwaltung von Werbeaktionen und Warenlieferungen einer Modemarke",
			customer: "Deutsches Modelabel aus Celle",
			description: "Für die Verwaltung von Verkaufs-Aktionen eines deutschen Modelabels wurde ein Webtool entwickelt, mit dem Aktionen und Warenlieferungen an Ladenflächen geplant und in das ERP-System des Kunden übertragen werden können.",
			location: "Hamburg",
			languages: ["Deutsch"],
			typeOfProject: "Einmannprojekt",
			isTopProject: true,
			
			typeOfSoftware: "Web",
			start: new Date(2015, 10),
			end: new Date(2016, 7),
			roles: [ "Developer", "Application Manager" ],
			technicalLanguages: [ "C#", "SQL", "HTML", "CSS", "JavaScript" ],
			frameworks: [ "ASP.NET MVC", "ASP.NET WebAPI", "Microsoft Reporting Services", "ExtJS", "Entity Framework" ],
			software: [ "Visual Studio", "TFS" ]
		},
		{
			title: "Online WG Mitbewohnersuche",
			customer: "Startup",
			description: "Im Rahmen eines Startupprojektes wurde eine Website entwickelt, um WG Bewohner dabei zu unterstützen geeignete Mitbewohner zu finden. Das primäre Ziel war die Reduktion des hohen Bewerberaufkommnens in Großstädten durch Abgleich von Interessen.",
			location: "Hamburg",
			languages: ["Deutsch"],
			typeOfProject: "Scrum",
			
			typeOfSoftware: "Web",
			link: new URL("http://www.hamburg-startups.net/comate-me-die-geburt-eines-startups/"),
			start: new Date(2015, 7),
			end: new Date(2015, 9),
			roles: [ "Developer" ],
			technicalLanguages: [ "C#", "Razor", "HTML", "CSS", "JavaScript" ],
			frameworks: [ "ASP.NET MVC", "Bootstrap" ],
			software: [ "Visual Studio", "Azure" ]
		},
		{
			title: "Abwicklung von Fern-Zulieferungen eines Online Baumarktes",
			customer: "Hamburger E-Commerce Unternehmen in Baumarkt Branche",
			description: "Für die Lieferanten eines Online Baumarkts wurde eine Web-Plattform gebaut. Über die Plattform werden die Lieferungen der Zulieferer verhandelt und vertraglich abgewickelt.",
			location: "Hamburg",
			languages: ["Deutsch"],
			typeOfProject: "Scrum",
			
			typeOfSoftware: "Web",
			start: new Date(2015, 4),
			end: new Date(2015, 8),
			roles: [ "Developer" ],
			technicalLanguages: [ "Java", "HTML", "CSS", "JavaScript", "SCSS" ],
			frameworks: [ "Bootstrap", "AngularJS", "JQuery" ],
			software: [ "Eclipse", "Jenkins" ]
		},
		{
			title: "Performance Analyse Tool für Online Shop",
			customer: "Hamburger E-Commerce Unternehmen",
			description: "Für ein Hamburger E-Commerce Unternehmen wurde eine Browser Erweiterung zur Qualitätssicherung entwickelt. Die Erweiterung unterstützt bei der Verbesserung der User Experience, indem sie die Performance der Website bewertet und Schwachstellen ermittelt.",
			location: "Hamburg",
			languages: ["Deutsch"],
			typeOfProject: "Einmannprojekt",
			
			typeOfSoftware: "Web",
			link: new URL("http://scale-team.github.io/scale-perf/"),
			start: new Date(2015, 3),
			end: new Date(2015, 3),
			roles: [ "Developer" ],
			technicalLanguages: [ "HTML", "CSS", "JavaScript" ],
			frameworks: [ ],
			software: [ "Notepad++" ]
		},
		{
			title: "System zur Unterstützung der Verkehrsmessung",
			customer: "Hafenmanagement Unternehmen",
			description: "Ein Unternehmen im Hafenmanagement ließ eine Software entwickeln, die den Verkehrsfluss im Hamburger Hafen messen sollte. Zur Absicherung des Projektes wurde eine Anwendung entwickelt, die die Messdaten mit Stauwerten aus Google Maps, Bing Maps und TomTom Maps vergleichte.",
			location: "Hamburg",
			languages: ["Deutsch"],
			typeOfProject: "Einmannprojekt",
			
			typeOfSoftware: "Desktop",
			start: new Date(2015, 1),
			end: new Date(2015, 2),
			roles: [ "Developer" ],
			technicalLanguages: [ "JavaScript" ],
			frameworks: [ ],
			software: [ "NodeJs", "Notepad++" ]
		},
		{
			title: "JavaScript Framework zur Optimierung von Dateiuploads",
			customer: "Glück&Kanja Consulting AG",
			description: "Für ein Frankfurter Consulting Unternehmen wurde ein JavaScript Framework entwickelt, das Dateiuploads beschleunigt.",
			location: "Offenbach am Main",
			languages: ["Deutsch"],
			typeOfProject: "Einmannprojekt",
			
			typeOfSoftware: "Web",
			start: new Date(2014, 4),
			end: new Date(2014, 7),
			roles: [ "Developer" ],
			technicalLanguages: [ "JavaScript" ],
			frameworks: [ ],
			software: [ "NodeJs", "Notepad++" ]
		},
		{
			title: "Verwaltung von Marketing Dokumenten",
			customer: "Glück&Kanja Consulting AG",
			description: "Ein Frankfurter Consulting Unternehmen benötigte eine Webanwendung, die ihren Beratern und den Kunden einen einfachen Zugang zu diversen Marketingdokumenten vereinfacht.",
			location: "Offenbach am Main",
			languages: ["Deutsch"],
			typeOfProject: "Einmannprojekt",
			
			typeOfSoftware: "Web",
			start: new Date(2014, 1),
			end: new Date(2014, 4),
			roles: [ "Developer" ],
			technicalLanguages: [ "HTML", "CSS", "JavaScript", "LESS", "JQuery" ],
			frameworks: [ "AngularJS", "Bootstrap" ],
			software: [ "Notepad++", "Jenkins", "Amazon Web Service" ]
		},
		{
			title: "Cloudbasierte Verwaltung von Passwörtern",
			customer: "Glück&Kanja Consulting AG",
			description: "Ein Frankfurter Consulting Unternehmen ließ eine Passwortverwaltung entwickeln, um eine Drittsoftware abzulösen. Die Software dient zur Verwaltung von Kundenpasswörtern.",
			location: "Offenbach am Main",
			languages: ["Deutsch"],
			typeOfProject: "Einmannprojekt",
			
			typeOfSoftware: "Web",
			start: new Date(2012, 1),
			end: new Date(2013, 9),
			roles: [ "Developer" ],
			technicalLanguages: [ "C#", "HTML", "CSS", "JavaScript" ],
			frameworks: [ "Bootstrap", "ASP.NET MVC", "ASP.NET WebAPI", "JQuery" ],
			software: [ "Visual Studio", "Jenkins", "Azure", "Amazon Web Service" ]
		},
		{
			title: "Cloudbasierter Datenaustausch zwischen Kunden und Consultants ",
			customer: "Glück&Kanja Consulting AG",
			description: "Ein Frankfurter Consulting Unternehmen ließ eine Software entwickeln, um Berater den Austausch von Dateien mit ihren Kunden zu vereinfachen.",
			location: "Offenbach am Main",
			languages: ["Deutsch"],
			typeOfProject: "Einmannprojekt",
			
			typeOfSoftware: "Web",
			start: new Date(2011, 1),
			end: new Date(2011, 9),
			roles: [ "Developer" ],
			technicalLanguages: [ "C#", "HTML", "CSS", "JavaScript" ],
			frameworks: [ "ASP.NET MVC", "JQuery" ],
			software: [ "Visual Studio", "Jenkins", "Azure", "Amazon Web Service" ]
		},
		{
			title: "Renn-Anzeige für Modellrennbahn",
			customer: "Glück&Kanja Consulting AG",
			description: "Im Rahmen eines Schulprojektes ließ ein Frankfurter Consulting Unternehmen einen Rundenzähler für eine Modell-Rennbahn bauen. Es wurden dazu Daten mit einem Arduino Mikrocontroller ausgelesen und mit einer WPF-Applikation visualisiert.",
			location: "Offenbach am Main",
			languages: ["Deutsch"],
			typeOfProject: "Wasserfall",
			
			typeOfSoftware: "Desktop",
			start: new Date(2009, 1),
			end: new Date(2009, 7),
			roles: [ "Developer" ],
			technicalLanguages: [ "C#", "XAML" ],
			frameworks: [ "WPF", "Windows Forms" ],
			software: [ "Visual Studio" ]
		},
	];
	
	for(let f in projects) {
		let project = projects[f];
		
		let end: Date = project.end || new Date();
		
		project.months = Math.round(Math.abs(end.getTime() - project.start.getTime()) / (1000 * 60 * 60 * 24 * 30)) + 1;
	}
	
	return {
		getProjects: function (): Project[] {
			return projects;
		}
	};
});