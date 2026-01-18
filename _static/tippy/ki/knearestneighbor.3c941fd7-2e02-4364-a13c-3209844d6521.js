selector_to_html = {"a[href=\"#der-k-nachste-nachbarn-algorithmus\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">22. </span>Der k-N\u00e4chste-Nachbarn-Algorithmus<a class=\"headerlink\" href=\"#der-k-nachste-nachbarn-algorithmus\" title=\"Link to this heading\">#</a></h1><p>Der <a class=\"reference external\" href=\"https://de.wikipedia.org/wiki/N%C3%A4chste-Nachbarn-Klassifikation\">k-N\u00e4chste-Nachbarn-Algorithmus</a> klassifiziert\neinen bisher ungelabelten Datensatz, indem er ihn mit seinen \u201cn\u00e4chsten Nachbarn\u201d vergleicht, d.h. mit\ndenjenigen bereits gelabelten Datens\u00e4tzen, die dem neuen Datensatz <em>am \u00e4hnlichsten</em> sind.<br/>\nDem unbekannten Datensatz wird dann dasjenige Label zugeordnet, das die <em>Mehrheit</em> der \u201cNachbarn\u201d hat.</p><p>Klingt kompliziert? Keine Sorge - das Verfahren ist total einfach.  Am folgenden <em>interaktiven</em> Beispiel wirst du schnell verstehen, wie der k-N\u00e4chste-Nachbarn-Algorithmus funktioniert.</p>"}
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
