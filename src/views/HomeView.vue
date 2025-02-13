<script setup>
import CelibrityComment from '@/components/CelibrityComment.vue'
</script>

<template>
  <main>
    <div class="container">
      <CelibrityComment />
      <section class="navigation">
        <div>ACTUALITÉS</div>
        <div>RÉSERVATION EN LIGNE</div>
        <div>GUINESS</div>
      </section>

      <h1>Menu Buffet à volonté à 62€90</h1>

      <section class="text">
        <div>
          <h2>LES GRANDS BUFFETS, VITRINE MONDIALE DE LA CUISINE D'AUGUSTE ESCOFFIER</h2>

          <p>
            Les Grands Buffets sont aujourd’hui reconnus par la fondation Escoffier comme la vitrine
            mondiale de la cuisine d’Auguste Escoffier, inventeur de l’art culinaire au XIXème
            siècle et qui a élevé la cuisine française au rang de cuisine planétaire. En proposant à
            discrétion, plus de 150 recettes d’Auguste Escoffier, entrées plats ou desserts, les
            Grands Buffets vous offre le répertoire des plats emblématiques de la cuisine française
            du XlXeme siècle. Les Grands Buffets renouent avec le luxe, la tradition culinaire et la
            qualité de service digne d’un palace du temps d’Auguste Escoffier et propose les grands
            classiques du répertoire de la cuisine française
          </p>
          <p>
            Les Grands Buffets a fait sienne une tradition française historiquement dénommée «
            service à la française » – celle des buffets. Depuis le Moyen-Age, c’est ainsi que les
            têtes couronnées et l’aristocratie française donnent leurs grands banquets. Distinct du
            service à l’anglaise ou à la russe, le service à la française consiste à servir tous les
            mets en même temps sur un «buffet» invitant chaque convive à composer son menu selon son
            goût et sa fantaisie. À votre tour !
          </p>
        </div>

        <div>
          <h2>UNE FORMULE DANS LA GRANDE TRADITION FRANÇAISE</h2>
          <p>
            Le restaurant Les Grands Buffets à Narbonne invite le public à revivre une expérience en
            voie de disparition : le festin classique à la française, sous forme de buffets
            regorgeant de mets exceptionnels.
          </p>
          <p>
            Notre formule unique en France rassemble toutes les pépites de notre patrimoine
            gastronomique : Canard au sang, Lièvre à la Royale, foie gras dans tous ses états,
            homard grillé ou à l’américaine, tripes mijotées, tête de veau gribiche, cassoulet,
            blanquette de veau à l’ancienne, os à moelle à la fleur de sel, sèches à la sétoise…
            Dans une profusion à perdre la raison, les plats canaille de nos terroirs côtoient les
            plats incontournables de la cuisine traditionnelle française. Donnez libre cours à vos
            gourmettes envies en composant un menu complet au gré de votre inspiration. Initiez
            votre périple gastronomique par une halte dans l’univers des hors d’œuvres, faites un
            détour par les fruits de mer, poursuivez votre procession via la rôtisserie puis
            laissez-vous émouvoir par la plus grande collection de fromages du monde dans un
            restaurant avec 111 variétés ! Ne reste qu’à conclure votre banquet sur un tableau final
            composé d’une myriade de pâtisseries ou sur une visite à nos maîtres glaciers dans le
            tout nouvel espace dédié aux crèmes glacées. Au passage, on accompagne soigneusement, en
            piochant dans la carte des 150 crus.
          </p>
        </div>
        <div>
          <h2>UN HOMMAGE AUX ARTS DE LA TABLE</h2>
          <p>
            Au restaurant Les Grands Buffets, le « revival » du festin classique à la française se
            poursuit bien au-delà de l’assiette et rend hommage aux arts traditionnels de la table.
            Plongé dans l’univers onirique d’une table prestigieuse, on déjeune ou dîne sur des
            nappes en tissu, éclairé aux chandelles. Chaque table, dressée au cordeau, met en scène
            un véritable cérémonial du repas classique à la française : verres à pied, vins carafés,
            napperons et serviettes brodées, couverts à poisson, etc.
          </p>
        </div>
      </section>

      <section class="pictures"></section>
    </div>
  </main>
</template>
<style scoped>
main .text p {
  font-family: Arial, Helvetica, sans-serif;
  color: var(--grey);
}
main h1 {
  font-family: ThirstyRoughRegular, serif;
  font-size: 58px;
  color: var(--grey);
}
main h2 {
  color: var(--orange);
  font-size: 25px;
}
</style>
