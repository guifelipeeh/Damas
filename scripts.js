


    const playButton = document.getElementById('playButton');

    // Notas do Hino Nacional do Brasil (simplificado)
    const hinoNotes = [
        { note: 'E4', duration: '8n' }, // G
        { note: 'F#4', duration: '8n' }, // F#
        // Adicione aqui as notas restantes
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        {note:'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'C5', duration: '4n' }, // A
        { note: 'B4', duration: '8n' }, // B
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' }, // B
        { note: 'G4', duration: '4n' }, // D
        { note: 'E4', duration: '4n' }, // E
        { note: 'G4', duration: '4n' }, // D
        { note: 'A4', duration: '8n' }, // C
        { note: 'B4', duration: '8n' } // B
        
    
]

const synth = new Tone.Synth().toDestination();

playButton.addEventListener('click', () => {
    playButton.disabled = true;
    playHino();
});

function playHino() {
    let index = 0;
    function playNote() {
        if (index < hinoNotes.length) {
            const { note, duration } = hinoNotes[index++];
            synth.triggerAttackRelease(note, duration);
            setTimeout(playNote, Tone.Time(duration).toMilliseconds());
        } else {
            playButton.disabled = false;
        }
    }
    playNote();
}
