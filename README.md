# Digitalfaksimile St. Gallen, Stiftsbibliothek, Cod. 857 (`cod857`)

## [Web publication](https://dhbern.github.io/parzival-digitalfaksimile-cod857)

## Origin


*Archival version (as-is): Data Science Lab, pdaengeli, 2024-06-02*

## License

---

<details><summary>Clean-up (before initial commit)</summary>

General approach: remove all spurious files (copies, obsolete notes, process artefacts), primarily based on file names (visual check).

PWD: root directory of this repository

* purge OS junk and ftp log files:
  * `find . -type f -name "Thumbs.db" -delete`
  * `find . -type f -name \.DS_Store -delete`

* (re)moved:
  * `Extras` (supplemental material on CD ROM: mediaevum ttf, old Firefox + Camino binaries)
  * `find . -type d -name "_notes" -exec rm -rf {} +` (obsolete DreamWeaver sync files)
  * `Daten/eklog` (php-based counter; log span: 2018-04-06 03:04:03 to 2023-01-20 11:06:28; count: 2900)

* (re)moved after `grep` testing:
  * `Daten/*_bak*`
  * `Daten/NL_Synopse/*_bak*`
  * `Daten/*_alt*`
  * `Daten/info/*_alt*`
  * `Daten/JS/*_alt*`
  * `Daten/Lagensymbole/*_alt*`
  * `Daten/LagensymboleDoppelt/*_alt*`
  * `Daten/NL_Synopse/*_alt*`
  * `Daten/*_save*`
  * `Daten/info/*_save*`
  * `Daten/NL_Synopse/*_save*`

</details>
