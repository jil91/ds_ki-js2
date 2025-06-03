selector_to_html = {"a[href=\"#ubungsaufgabe\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">\u00dcbungsaufgabe<a class=\"headerlink\" href=\"#ubungsaufgabe\" title=\"Link to this heading\">#</a></h3><p>Bearbeite die folgende Aufgabe direkt im Browser (\ud83d\ude80-Button).</p><p>Wenn du die Zelle ausf\u00fchrst, laufen ein paar automatische Tests ab. Wenn sie alle fehlerfrei durchlaufen, herzlichen Gl\u00fcckwunsch! Falls nicht, sieh dir an, welcher Test schief ging und \u00fcberlege warum.</p>", "a[href=\"#live-coding-erster-versuch\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Live Coding: Erster Versuch<a class=\"headerlink\" href=\"#live-coding-erster-versuch\" title=\"Link to this heading\">#</a></h2><h3>\u00dcbungsaufgabe<a class=\"headerlink\" href=\"#ubungsaufgabe\" title=\"Link to this heading\">#</a></h3><p>Bearbeite die folgende Aufgabe direkt im Browser (\ud83d\ude80-Button).</p><p>Wenn du die Zelle ausf\u00fchrst, laufen ein paar automatische Tests ab. Wenn sie alle fehlerfrei durchlaufen, herzlichen Gl\u00fcckwunsch! Falls nicht, sieh dir an, welcher Test schief ging und \u00fcberlege warum.</p>", "a[href=\"#programmieren-direkt-in-diesem-buch\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">1.3. </span>Programmieren direkt in diesem Buch<a class=\"headerlink\" href=\"#programmieren-direkt-in-diesem-buch\" title=\"Link to this heading\">#</a></h1><p>Auf manchen Seiten in diesem Buch siehst du ganz oben ein \ud83d\ude80 Raketensymbol. Klicke es an und w\u00e4hle dann \u201cLive Code\u201d. Dadurch wird die Seite zu einem Jupyter Notebook, das du direkt im Browser bearbeiten und ausf\u00fchren kannst - ganz ohne Software zu installieren!</p><p>Probiere es hier unten gleich einmal aus \ud83d\udc47</p>", "a[href=\"#aufgaben-herunterladen\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Aufgaben herunterladen<a class=\"headerlink\" href=\"#aufgaben-herunterladen\" title=\"Link to this heading\">#</a></h2><p>Dieses Skript besteht aus <em>Jupyter Notebooks</em>. Du kannst, wie oben gezeigt, die Notebooks im Browser bearbeiten. Das ist v.a. f\u00fcr kurze, einfache Aufgaben sinnvoll. Allerdings sind deine Eingaben beim Neuladen der Webseite sofort wieder verschwunden.</p><p>Du kannst die Notebooks aber auch herunterladen und <em>auf deinem eigenen Rechner</em> damit arbeiten (z.B. in <em>VS Code</em>).</p>"}
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
