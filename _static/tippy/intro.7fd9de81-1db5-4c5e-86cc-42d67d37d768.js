selector_to_html = {"a[href=\"#oop-datenbanken-datenstrukturen-und-kunstliche-intelligenz\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">OOP, Datenbanken, Datenstrukturen und K\u00fcnstliche Intelligenz<a class=\"headerlink\" href=\"#oop-datenbanken-datenstrukturen-und-kunstliche-intelligenz\" title=\"Link to this heading\">#</a></h1><p><em>Skript f\u00fcr die Jahrgangsstufe 1 und 2 des Profilfachs Informationstechnik am Technischen Gymnasium (BW)</em></p><p><strong>Michael Brenner</strong><br/>\n<strong>Schuljahr 2025/2026</strong><br/>\n<em><strong>\u00dcberarbeitet von Manuel Jilg</strong></em></p>", "a[href=\"#fig-mindmap-abistoff-it\"]": "<figure class=\"align-default\" id=\"fig-mindmap-abistoff-it\">\n<img alt=\"_images/mindmapNeu.png\" src=\"_images/mindmapNeu.png\"/>\n<figcaption>\n<p><span class=\"caption-number\">Abb. 1 </span><span class=\"caption-text\">\u00dcbersicht der Inhalte in Klasse 12 und 13\u2026</span><a class=\"headerlink\" href=\"#fig-mindmap-abistoff-it\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#worum-geht-es-in-diesem-buch\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Worum geht es in diesem Buch?<a class=\"headerlink\" href=\"#worum-geht-es-in-diesem-buch\" title=\"Link to this heading\">#</a></h2><p>In diesem Skript geht es umd die abitur-relevanten Software-Themen aus dem <a class=\"reference external\" href=\"https://www.bildungsplaene-bw.de/,Lde/InfTech_OS\">Bildungsplan der Jahrgangsstufe 12 und 13</a>:</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }
            link.classList.add('has-tippy');
            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: false,
                placement: 'auto-start', maxWidth: 500, interactive: true, boundary: document.body, appendTo: document.body,
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {var isFirefox=typeof InstallTrigger!=='undefined';if(isFirefox&&window.MathJax&&MathJax.startup&&MathJax.startup.output&&MathJax.startup.output.name==="SVG"){const svgs=instance.popper.querySelectorAll('svg');svgs.forEach(svg=>{let bbox=svg.getBBox(),x=bbox.x,y=bbox.y,width=bbox.width,height=bbox.height;svg.setAttribute('width',width);svg.setAttribute('height',height);svg.setAttribute('viewBox',`${x} ${y} ${width} ${height}`);});let rescale=0.015;svgs.forEach(svg=>{let bbox=svg.getBBox(),width=bbox.width,height=bbox.height;svg.setAttribute('width',width*rescale);svg.setAttribute('height',height*rescale);});}});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
