selector_to_html = {"a[href=\"verkettete_listen.html#fig-kd-verkettete-liste\"]": "<figure class=\"align-center\" id=\"fig-kd-verkettete-liste\">\n<a class=\"reference internal image-reference\" href=\"../_images/kd_verkettete_liste_fosa.svg\"><img alt=\"../_images/kd_verkettete_liste_fosa.svg\" src=\"../_images/kd_verkettete_liste_fosa.svg\" style=\"width: 80%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-number\">Abb. 4.3 </span><span class=\"caption-text\">Klassendiagramm f\u00fcr die Datenstruktur <em>Verkettete Liste</em> (FoSa 5.1)</span><a class=\"headerlink\" href=\"#fig-kd-verkettete-liste\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#losungen-operationen-fur-verkettete-listen-implementieren\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4.6. </span>L\u00f6sungen: Operationen f\u00fcr verkettete Listen implementieren<a class=\"headerlink\" href=\"#losungen-operationen-fur-verkettete-listen-implementieren\" title=\"Link to this heading\">#</a></h1><p>In diesem Notebook sind <em>m\u00f6gliche</em> Implementationen f\u00fcr die Operationen der verketteten Liste aus dem Klassendiagramm  <a class=\"reference internal\" href=\"verkettete_listen.html#fig-kd-verkettete-liste\"><span class=\"std std-numref\">Abb. 4.3</span></a> gezeigt. Diese Implementation besteht (hoffentlich!) alle Tests\u2026</p>"}
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
