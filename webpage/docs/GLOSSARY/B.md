# Glossar

## A

## B

## C

### CDD

CANdelaStudio diagnostic description

### CRC

**CRC** steht für "Cyclic Redundancy Check" und ist ein Verfahren zur Fehlererkennung in Datenübertragungen.

### CSMA/CR

CSMA/CR (Carrier Sense Multiple Access with Collision Resolution) ist ein Zugriffsprotokoll, das in Netzwerken verwendet wird, um den Zugriff auf das gemeinsam genutzte Übertragungsmedium zu regulieren. Das Protokoll funktioniert, indem es zuerst den Zustand des Übertragungsmediums überwacht, um festzustellen, ob es frei ist oder von anderen Teilnehmern genutzt wird. Wenn das Medium frei ist, sendet der Sender seine Daten. Allerdings kann es vorkommen, dass mehrere Teilnehmer gleichzeitig versuchen, Daten zu senden, was zu einer Kollision führt. In solchen Fällen erkennt CSMA/CR die Kollision und löst sie auf, indem es einen Mechanismus zur Wiederholung der Übertragung oder zur Neuplanung einführt. Dies ermöglicht es den beteiligten Teilnehmern, ihre Daten erneut zu senden, um die Kollision zu beheben und die korrekte Übertragung sicherzustellen.

### CSMA/CA

CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance) ist ein Zugriffsprotokoll, das ebenfalls in Netzwerken eingesetzt wird, um den Zugriff auf das Übertragungsmedium zu regeln. Im Gegensatz zu CSMA/CR, das Kollisionen erkennt und behandelt, zielt CSMA/CA darauf ab, Kollisionen zu vermeiden. Das Protokoll überwacht das Übertragungsmedium, um festzustellen, ob es frei ist, bevor es Daten sendet. Wenn das Medium als frei erkannt wird, wartet der Sender jedoch zunächst eine zufällige Zeit, bevor er mit der Datenübertragung beginnt. Diese zufällige Wartezeit dient dazu, die Wahrscheinlichkeit von Kollisionen zu verringern, insbesondere in Situationen, in denen mehrere Teilnehmer gleichzeitig versuchen, Daten zu senden. Durch die Einführung dieser zufälligen Wartezeit verringert CSMA/CA die Wahrscheinlichkeit von Kollisionen und trägt so zur Verbesserung der Netzwerkeffizienz und -stabilität bei.

## D

### DoIP

DoIP steht für "Diagnostics over Internet Protocol" und bezeichnet eine Technologie, die es ermöglicht, Fahrzeugdiagnoseinformationen über das Internet zu übertragen. Diese Technologie ermöglicht es, Diagnosedaten von Fahrzeugen in Echtzeit an entfernte Standorte zu senden, wo sie von Fachleuten analysiert werden können. DoIP verbessert die Effizienz von Diagnoseprozessen, da sie eine schnellere und präzisere Fehlererkennung ermöglicht. Darüber hinaus ermöglicht sie Fernwartungs- und Updatefunktionen für Fahrzeugsysteme, was zu einer verbesserten Wartung und einem besseren Kundenservice führt.

### DLC

**DLC** steht für "Data Length Code" und bezieht sich auf das Feld in einem CAN-Nachrichtenframe, das die Anzahl der Datenbytes in der Nachricht angibt.

## E

### ESD

ESD-Schutz (Electrostatic Discharge Protection) in Bezug auf CAN bezieht sich auf Maßnahmen und Komponenten, die entwickelt wurden, um das Controller Area Network vor Schäden durch elektrostatische Entladungen zu schützen. ESD kann durch die Anhäufung statischer Ladung auf elektronischen Bauteilen oder Leitungen verursacht werden und kann empfindliche CAN-Komponenten beschädigen oder ihre Leistung beeinträchtigen. ESD-Schutzmaßnahmen können beispielsweise die Verwendung von Schutzdioden, Entladungspfade oder speziell entworfene Gehäuse umfassen, um sicherzustellen, dass elektrostatische Entladungen sicher abgeleitet werden, ohne die Funktion des CAN-Netzwerks zu stören.

### EOF

**EOF** steht für "End of Frame" und markiert das Ende einer Nachricht in einem seriellem Datenübertragungsprotokoll wie CAN.

## I

### IDE

**IDE** steht für "Identifier Extension" und bezieht sich auf ein Bit im CAN-Nachrichtenrahmen, das angibt, ob der CAN-Identifier aus 11 oder 29 Bit besteht.

### ITM

**ITM** steht für

### Interferenz

Interferenz bezieht sich auf die Störung oder Beeinträchtigung eines Signals durch externe Faktoren wie elektromagnetische Felder, Rauschen oder andere Signale, die in der Umgebung vorhanden sind. In Bezug auf Kommunikationskabel wie UTP kann Interferenz die Klarheit und Zuverlässigkeit der Signalübertragung beeinträchtigen, was zu Datenverlusten oder Fehlinterpretationen führen kann.

## L

### LLC - Logical Link Control

## M

### Multi-Master

Das Multi-Master-Prinzip in der Buskommunikation ermöglicht es mehreren Geräten, gleichzeitig die Rolle des Masters zu übernehmen, wodurch eine gleichzeitige Datenübertragung und eine flexible Kommunikation ermöglicht werden.

### Master-Slave

Das Master-Slave-Prinzip in der Buskommunikation bezeichnet eine Architektur, in der ein Hauptgerät (Master) die Kontrolle über den Kommunikationsbus hat und Daten an andere Geräte (Slaves) sendet. Die Slaves können nur auf Anforderung des Masters antworten.

### MAC - Medium Access Control

## N

### NRZ

Die Non-Return-to-Zero (NRZ)-Codierung ist eine Methode zur Signalisierung von Daten, die im CAN-Bus verwendet wird. Bei der NRZ-Codierung bleibt das Signal auf einem hohen oder niedrigen Pegel für die gesamte Dauer eines Datenbits, ohne zwischen den beiden Zuständen zurückzukehren. In einem CAN-Bus werden logische Einsen durch einen dominanten Zustand (Low-Pegel) und logische Nullen durch einen rezessiven Zustand (High-Pegel) dargestellt. Die NRZ-Codierung ermöglicht eine einfache Implementierung und eine hohe Signalintegrität, da sie keine zusätzliche Taktsynchronisation erfordert. Sie wird daher häufig in CAN-Netzwerken eingesetzt, um eine zuverlässige und effiziente Datenübertragung zu gewährleisten.

## R

### REC

Receive Error Counter

### RTR

**RTR** steht für "Remote Transmission Request" und wird in CAN verwendet, um anzuzeigen, dass der Sender eine Remote-Anforderung für Datenübertragung an den Empfänger sendet.

## S

### SOF

**SOF** steht für "Start of Frame" und markiert den Beginn einer Nachricht in einem seriellem Datenübertragungsprotokoll wie CAN.

## T

### TEC

Transmit Error Counter

## U

### UDP

## T

### TCP

## O

### ODX

## V

### VLAN
