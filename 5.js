const imageBoxes = document.querySelectorAll('.image-box');


const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close-btn');


const descriptions = {
    'Melchora Aquino': 'Melchora Aquino, also known as "Tandang Sora," is a revered figure in Philippine history for her significant role in the Philippine Revolution against Spanish colonial rule. She is often referred to as the "Mother of the Philippine Revolution" for her support of the revolutionary fighters, particularly in providing shelter, food, and medical assistance to the Katipuneros (members of the revolutionary movement). Despite being in her advanced years, Aquino remained steadfast in her dedication to the cause of independence. She courageously helped fund the revolution and offered crucial assistance to Filipino revolutionaries, even at great personal risk. Aquino was arrested and exiled by the Spanish authorities in 1897 for her involvement, but her contributions to the fight for freedom left a lasting legacy of patriotism and selflessness.',
    'Emilio Aguinaldo': 'Emilio Aguinaldo played a pivotal role in the Philippines struggle for independence. As the leader of the Philippine Revolution against Spanish colonial rule, he became the first President of the Philippines in 1899, leading the country in its fight for freedom. Aguinaldo most significant contributions include the declaration of Philippine independence on June 12, 1898, and his leadership in the Battle of Zapote Bridge, which marked key moments in the revolution. He also led the fight against American colonial forces during the Philippine-American War. His leadership and vision for an independent Philippine nation were instrumental in the country pursuit of sovereignty, though his leadership was also marked by internal political conflicts. Aguinaldo contributions remain central to the narrative of Philippine independence and nation-building.',
    'Jose Rizal': 'José Rizal is considered the national hero of the Philippines for his immense contributions to the country fight for freedom through peaceful means. A brilliant writer, doctor, and reformist, Rizal used his writings to expose the abuses of the Spanish colonial government and the clergy. His famous novels, Noli Me Tangere and El Filibusterismo, awakened Filipino nationalism and inspired the revolution against Spanish rule. Instead of advocating violence, Rizal called for peaceful reforms, equal rights, and education for Filipinos. His martyrdom — being executed by firing squad on December 30, 1896 — further fueled the revolutionary movement, making him a symbol of courage, intellect, and patriotism for future generations.',
    'Gabriela Silang': 'Gabriela Silang is celebrated as the first female leader of a Philippine revolutionary movement against Spanish colonial rule. After the assassination of her husband, revolutionary leader Diego Silang, in 1763, Gabriela took up his cause and continued the fight for freedom in the Ilocos region. Known for her bravery and leadership, she led her own army of fighters in battles against Spanish forces, becoming a symbol of resistance and courage. Although her revolt was eventually suppressed and she was captured and executed, Gabriela Silang remains a powerful icon of Filipino nationalism and the struggle for equality and independence, especially for women.',
    'Andres Bonifacio': 'Andrés Bonifacio, known as the "Father of the Philippine Revolution," was a key leader in the fight against Spanish colonial rule. He founded and led the Katipunan (Kataas-taasan, Kagalang-galangang Katipunan ng mga Anak ng Bayan), a secret revolutionary society that aimed to gain Philippine independence through armed revolt. Bonifacio courage and commitment inspired thousands of Filipinos to join the struggle for freedom. He believed in equality, national unity, and the rights of ordinary people. Although he was later executed during internal conflicts within the revolutionary movement, Bonifacio legacy as a symbol of bravery, sacrifice, and the people will to fight for freedom remains deeply honored in Philippine history.',
    'Manuel L. Quezon': 'Manuel L. Quezon, known as the "Father of the Philippine National Language," played a vital role in the country journey toward self-governance. As the first President of the Commonwealth of the Philippines (1935–1944), he worked to prepare the country for full independence from the United States. Quezon pushed for social justice reforms, improved the education system, promoted land reform, and strengthened the military. One of his most significant contributions was championing the development of a national language, which helped unite Filipinos from different regions. His leadership during a critical time in Philippine history helped lay the foundations for the nation eventual independence.',
    'Apolinario Mabini': 'Apolinario Mabini, known as the "Brains of the Revolution" and the "Sublime Paralytic," made crucial contributions to the Philippine fight for independence. Despite being paralyzed from polio, Mabini served as the chief adviser to President Emilio Aguinaldo during the Philippine Revolution and the Philippine-American War. He was instrumental in drafting important documents, including the constitution of the First Philippine Republic, and guided the revolutionary government with his sharp intellect and unwavering patriotism. Mabini advocated for a government based on justice, equality, and the people sovereignty, emphasizing the importance of true independence over foreign rule. His writings and leadership left a lasting mark on the shaping of the Philippine nation.',
    'Antonio Luna': 'Antonio Luna was a brilliant Filipino general and military strategist during the Philippine-American War, known for his fierce dedication to the cause of Philippine independence. A chemist and pharmacist by training, Luna later applied his scientific mind to military tactics, organizing and disciplining the revolutionary army to better resist American forces. He is best remembered for creating the "Luna Defense Line," a network of trenches and fortifications to slow down enemy advances. His leadership emphasized the importance of discipline, national unity, and strategic defense. Despite his promising efforts, Luna was tragically assassinated in 1899 by fellow Filipinos due to political rivalries, cutting short his potential to further strengthen the Philippine resistance.',
    'Marcelo H. del Pilar': 'Marcelo H. del Pilar was a leading figure in the Philippine reform movement during the Spanish colonial period, using his talents as a writer, lawyer, and journalist to fight for Filipino rights. He became the editor of La Solidaridad, the main publication of the Propaganda Movement, where he wrote articles exposing the abuses of Spanish friars and calling for political reforms, civil liberties, and greater Filipino participation in government. Del Pilar believed in peaceful advocacy rather than armed revolution, aiming to achieve change through education and awareness. His writings helped ignite national consciousness among Filipinos, earning him the title "Father of Philippine Journalism" and making him one of the pillars of the movement that laid the groundwork for the eventual revolution.',
    'Lapu-Lapu': 'Lapu-Lapu is celebrated as the first Filipino hero for resisting foreign colonization. As the chieftain of Mactan, he led his warriors in the historic Battle of Mactan on April 27, 1521, where they successfully repelled Spanish forces led by Portuguese explorer Ferdinand Magellan. Lapu-Lapu victory is seen as the first act of Filipino resistance against foreign invaders, symbolizing bravery, independence, and the Filipinos determination to defend their homeland. His legacy lives on as a powerful national symbol of courage and freedom, inspiring future generations to fight for sovereignty and national pride.'
};

imageBoxes.forEach(box => {
    box.addEventListener('click', () => {
        const heroName = box.querySelector('.name').innerText;
        console.log('Clicked hero name:', heroName); 

        const description = descriptions[heroName] || 'No description available.';
        modalText.textContent = description;
        modal.style.display = 'flex';
        document.querySelector('.middle-gallery').classList.add('blurred');
    });
});


closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.querySelector('.middle-gallery').classList.remove('blurred');
});


modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.querySelector('.middle-gallery').classList.remove('blurred');
    }
});
