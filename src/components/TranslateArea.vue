<script setup></script>
<template>
  <div class="div-bloc">
    <!-- <div>
      <font-awesome-icon :icon="['fas', 'search']" class="svg-search" />
    </div> -->

    <div>
      <div>
        <img src="../assets/IMGS/fr.png" alt="drapeau français" />
        <label for="language">FRANÇAIS</label>

        <!-- <div>
          <font-awesome-icon :icon="['fas', 'caret-down']" class="svg-caret" />
        </div> -->
        <!-- <select name="language" id="language">
          <option value="">Anglais</option>
          <option value="12H">Français</option>
        </select> -->
      </div>
    </div>
  </div>
</template>
<style scoped>
h1 {
  color: white;
}
.div-bloc {
  padding: 0 10px;
  display: flex;
}

.div-bloc > div > div {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  padding: 0 0 10px 0;
  border-bottom: 1px solid var(--white);
  margin: 0 0 10px 20px;
}
.div-bloc > div {
  border-left: 1px solid var(--grey);
  padding: 5px;
}
.div-bloc label {
  color: white;
  font-family: 'BrandonGrotesqueLight', sans-serif;
  font-size: 11px;
  letter-spacing: 3px;
}

/* .div-bloc .svg-search {
  color: var(--orange);
  margin: 10px 20px 0 0;
  font-size: 20px;
} */
.div-bloc .svg-caret {
  color: white;
}
/* select {
  display: none;
}
select:hover {
  display: unset;
} */
</style>
