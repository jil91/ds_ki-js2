selector_to_html = {"a[href=\"#warteschlangen\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">16.3. </span>Warteschlangen<a class=\"headerlink\" href=\"#warteschlangen\" title=\"Link to this heading\">#</a></h1><p>Warteschlangen (engl. <em>Queue</em>) arbeiten nach dem <strong>FIFO-Prinzip (First In, First Out)</strong>, d.h.\nwer zuerst kommt, wird zuerst bedient. Konkret bedeutet das, dass ein neues Element\n<em>hinten</em> an die Warteschlange angeh\u00e4ngt werden (mit der Operation <code class=\"docutils literal notranslate\"><span class=\"pre\">queue()</span></code>) und Elemente <em>vorne</em> aus der\nWarteschlange entnommen werden (mit der Operation <code class=\"docutils literal notranslate\"><span class=\"pre\">dequeue()</span></code>).</p>", "a[href=\"#fig-kd-queue-fosa\"]": "<figure class=\"align-center\" id=\"fig-kd-queue-fosa\">\n<a class=\"reference internal image-reference\" href=\"../_images/kd_queue_fosa.svg\"><img alt=\"../_images/kd_queue_fosa.svg\" src=\"../_images/kd_queue_fosa.svg\" style=\"width: 80%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-number\">Abb. 16.2 </span><span class=\"caption-text\">Klassendiagramm f\u00fcr den Datentyp <em>Warteschlange (Queue)</em> (FoSa 4.68)</span><a class=\"headerlink\" href=\"#fig-kd-queue-fosa\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>"}
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
