selector_to_html = {"a[href=\"#hohe-des-stapels-bestimmen\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.2.1. </span>H\u00f6he des Stapels bestimmen<a class=\"headerlink\" href=\"#hohe-des-stapels-bestimmen\" title=\"Link to this heading\">#</a></h2><p>In der folgenden Zelle siehst du die Klasse <code class=\"docutils literal notranslate\"><span class=\"pre\">Stapel</span></code>, die wir bereits entwickelt haben. Schau dir nun insb. die Methode <code class=\"docutils literal notranslate\"><span class=\"pre\">anzahlElemente</span></code> an, mit der man die \u201cH\u00f6he\u201d des Stapels bestimmen kann.</p>", "a[href=\"#ubungen-zu-stapeln\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.2. </span>\u00dcbungen zu Stapeln<a class=\"headerlink\" href=\"#ubungen-zu-stapeln\" title=\"Link to this heading\">#</a></h1><h2><span class=\"section-number\">16.2.1. </span>H\u00f6he des Stapels bestimmen<a class=\"headerlink\" href=\"#hohe-des-stapels-bestimmen\" title=\"Link to this heading\">#</a></h2><p>In der folgenden Zelle siehst du die Klasse <code class=\"docutils literal notranslate\"><span class=\"pre\">Stapel</span></code>, die wir bereits entwickelt haben. Schau dir nun insb. die Methode <code class=\"docutils literal notranslate\"><span class=\"pre\">anzahlElemente</span></code> an, mit der man die \u201cH\u00f6he\u201d des Stapels bestimmen kann.</p>", "a[href=\"#aufgabe-umgekehrte-polnische-notation-upn\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.2.2. </span>Aufgabe: Umgekehrte polnische Notation (UPN)<a class=\"headerlink\" href=\"#aufgabe-umgekehrte-polnische-notation-upn\" title=\"Link to this heading\">#</a></h2><p>In der <a class=\"reference external\" href=\"https://de.wikipedia.org/wiki/Umgekehrte_polnische_Notation\">umgekehrten polnischen Notation (UPN)</a> f\u00fcr Rechenausdr\u00fccke werden die Operanden <em>vor</em> den Operatoren geschrieben.</p><p>Beispiel: 3 4 + 5 * bedeutet (3 + 4) * 5 = 35</p>"}
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
