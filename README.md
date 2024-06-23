# Digitalfaksimile St. Gallen, Stiftsbibliothek, Cod. 857 (`cod857`)

## [Web publication](https://dhbern.github.io/parzival-digitalfaksimile-cod857)

## Origin

* Published on CD-ROM in 2005: *Die St. Galler Nibelungenhandschrift: Parzival, Nibelungenlied und Klage, Karl, Willehalm. Faksimile des Codex 857 der Stiftsbibliothek St. Gallen und zugehöriger Fragmente. CD-Rom mit einem Begleitheft. Hrsg. von der Stiftsbibliothek St. Gallen und dem Basler Parzival-Projekt. Konzept und Einführung von Michael Stolz, St. Gallen 2003 (Codices Electronici Sangallenses 1); zweite erweiterte Auflage (2. Tausend) St. Gallen 2005*

  * About the resource: 

    > Dank einer im Internet verfügbaren Edition kann die Handschrift mit den erwähnten Bestandteilen und Fragmenten virtuell zusammengeführt werden. […] Die in eine Benutzeroberfläche eingebundenen Farbaufnahmen gestatten es, die darin enthaltenen mittelalterlichen Texte in jener Gestalt wahrzunehmen, in der sie zur Mitte des 13. Jahrhunderts, also etwa 50 Jahre nach ihrer Entstehungszeit, kopiert, gelesen und vorgelesen wurden. Sehr viel näher ist in der handschriftlichen Überlieferung kaum je an die mittelhochdeutschen Dichter heranzukommen.

    Quoting DOI: [10.24894/978-3-7965-4223-7](https://doi.org/10.24894/978-3-7965-4223-7)

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
