import styles from "./home.module.css"

export default function Home() {
    return (
        <div>
            <h2 className={styles.titleH2}>Desenvolvimento Front-End com Frameworks</h2>
            <h3 className={styles.titleH3}>Mobile-First UI com React</h3>
            <h4 className={styles.titleH4}>
                Diferença entre responsividade e adaptabilidade
            </h4>
            <p className={styles.paragraph}>
                A responsividade é a capacidade de um layout de se ajustar a diferentes
                tamanhos de tela de maneira fluida e proporcional. O conteúdo é
                reorganizado e redimensionado automaticamente, garantindo uma boa
                experiência do usuário em qualquer dispositivo, seja ele um desktop, um
                tablet ou um smartphone.
            </p>
            <p className={styles.paragraph}>
                Já a adaptabilidade refere-se a layouts que mudam em pontos específicos,
                mas sem uma transição suave. Ou seja, o layout se adapta ao dispositivo,
                mas não é fluido como o layout responsivo. A experiência do usuário pode
                ser diferente entre dispositivos, dependendo da abordagem escolhida.
            </p>
            <p className={styles.paragraph}>
                O mobile-first é uma estratégia que prioriza a experiência em dispositivos
                móveis, começando o design com eles em mente. A responsividade é uma
                evolução desse conceito, tornando o layout flexível em qualquer resolução.
            </p>
        </div>
    )
}