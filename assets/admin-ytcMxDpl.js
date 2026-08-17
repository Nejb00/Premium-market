import{s as v,a,b as i,i as $,f as y,d as C,e as g}from"./api-Cn-VBkN_.js";async function _(){try{const{error:e}=await v.auth.signInWithPassword({email:document.getElementById("adminEmail").value.trim(),password:document.getElementById("adminPassword").value});if(e)throw e;a.isAdminLoggedIn=!0,document.getElementById("adminPanel").classList.add("active"),document.getElementById("loginPanel").style.display="none",document.getElementById("logoutBtn").classList.add("visible"),m(),o(),i("🔓 Connecté")}catch(e){document.getElementById("adminError").textContent=e.message}}async function T(){await v.auth.signOut(),a.isAdminLoggedIn=!1,document.getElementById("adminPanel").classList.remove("active"),document.getElementById("loginPanel").style.display="block",document.getElementById("logoutBtn").classList.remove("visible"),i("👋 Déconnecté")}async function k(){const{data:{session:e}}=await v.auth.getSession();return e&&(a.isAdminLoggedIn=!0,document.getElementById("adminPanel").classList.add("active"),document.getElementById("loginPanel").style.display="none",document.getElementById("logoutBtn").classList.add("visible"),m(),o()),a.isAdminLoggedIn}function m(){const e=document.getElementById("adminProductsList");e&&(e.innerHTML=a.products.map(n=>`<li><span>${g(n.name)} [ID: ${n.id}]</span><button class="btn-sm" data-action="admin-remove" data-id="${n.id}">🗑️</button></li>`).join(""))}function o(){var E,B;const e=document.getElementById("adminStats");if(!e||!a.products.length)return;const n=Date.now(),s=7*24*60*60*1e3,c=t=>t.created_at&&n-new Date(t.created_at).getTime()<=s,l=a.products.length,w=a.products.reduce((t,d)=>t+(d.popularity_score||0),0),f=a.products.filter(t=>(t.popularity_score||0)>=20).length,h=a.products.filter(c).length,I=[...a.products].sort((t,d)=>(d.popularity_score||0)-(t.popularity_score||0)).slice(0,5),P=((E=I[0])==null?void 0:E.popularity_score)||1,r={},u={};a.products.forEach(t=>{t.category&&(r[t.category]=(r[t.category]||0)+(t.popularity_score||0),u[t.category]=(u[t.category]||0)+1)});const p=Object.entries(r).sort((t,d)=>d[1]-t[1]).slice(0,5),L=((B=p[0])==null?void 0:B[1])||1;e.innerHTML=`
    <div class="admin-stats-grid">
      <div class="admin-stat-card">
        <div class="admin-stat-label">Produits en ligne</div>
        <div class="admin-stat-value">${l}</div>
      </div>
      <div class="admin-stat-card">
        <div class="admin-stat-label">Popularité cumulée</div>
        <div class="admin-stat-value">${w}</div>
      </div>
      <div class="admin-stat-card">
        <div class="admin-stat-label">Best-sellers 🔥</div>
        <div class="admin-stat-value">${f}</div>
      </div>
      <div class="admin-stat-card">
        <div class="admin-stat-label">Nouveautés ✨</div>
        <div class="admin-stat-value">${h}</div>
      </div>
    </div>

    <div class="admin-stats-section">
      <h3 class="admin-stats-title">Top 5 produits populaires</h3>
      <div class="admin-stats-list">
        ${I.map(t=>{const d=Math.round((t.popularity_score||0)/P*100);return`
            <div class="admin-stat-row">
              <div class="admin-stat-row-info">
                <span class="admin-stat-row-name">${g(t.name)}</span>
                <span class="admin-stat-row-score">${t.popularity_score||0}</span>
              </div>
              <div class="admin-stat-bar"><div class="admin-stat-bar-fill" style="width:${d}%"></div></div>
            </div>
          `}).join("")}
      </div>
    </div>

    <div class="admin-stats-section">
      <h3 class="admin-stats-title">Top catégories</h3>
      <div class="admin-stats-list">
        ${p.map(([t,d])=>{const b=Math.round(d/L*100);return`
            <div class="admin-stat-row">
              <div class="admin-stat-row-info">
                <span class="admin-stat-row-name">${g(t)} <span class="admin-stat-row-count">(${u[t]} articles)</span></span>
                <span class="admin-stat-row-score">${d}</span>
              </div>
              <div class="admin-stat-bar"><div class="admin-stat-bar-fill" style="width:${b}%"></div></div>
            </div>
          `}).join("")}
      </div>
    </div>
  `}async function A(){const e=document.getElementById("adminName").value.trim(),n=document.getElementById("adminCategory").value.trim(),s=parseInt(document.getElementById("adminPrice").value);if(!e||!n||isNaN(s)){i("❌ Remplis nom, catégorie et prix");return}const c={name:e,category:n,price:s,image:document.getElementById("adminImage").value.trim(),image2:document.getElementById("adminImage2").value.trim(),image3:document.getElementById("adminImage3").value.trim(),image4:document.getElementById("adminImage4").value.trim(),image5:document.getElementById("adminImage5").value.trim(),image6:document.getElementById("adminImage6").value.trim(),tailles:document.getElementById("adminTailles").value.trim(),couleurs:document.getElementById("adminCouleurs").value.trim(),moq:parseInt(document.getElementById("adminMoq").value)||1,description:document.getElementById("adminDesc").value.trim()};try{await $(c),await y(),m(),o(),document.getElementById("adminName").value="",document.getElementById("adminCategory").value="",document.getElementById("adminPrice").value="",document.getElementById("adminImage").value="",document.getElementById("adminImage2").value="",document.getElementById("adminImage3").value="",document.getElementById("adminImage4").value="",document.getElementById("adminImage5").value="",document.getElementById("adminImage6").value="",document.getElementById("adminTailles").value="",document.getElementById("adminCouleurs").value="",document.getElementById("adminMoq").value="1",document.getElementById("adminDesc").value="",i("✅ Produit ajouté")}catch(l){i("❌ Erreur: "+l.message)}}async function S(e){if(confirm("Supprimer ce produit ?"))try{await C(e),await y(),m(),o(),i("🗑️ Produit supprimé")}catch(n){i("❌ Erreur: "+n.message)}}document.getElementById("adminLoginBtn").addEventListener("click",_);document.getElementById("logoutBtn").addEventListener("click",T);document.getElementById("addProductBtn").addEventListener("click",A);document.getElementById("backToCatalogueBtn").addEventListener("click",()=>{window.location.href="index.html"});document.addEventListener("click",e=>{e.target.matches('[data-action="admin-remove"]')&&S(parseInt(e.target.dataset.id))});async function D(){await y(),await k()}D();
