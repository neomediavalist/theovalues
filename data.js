const categories = [
    "theology_proper",
    "christology",
    "bibliology",
    "pneumatology",
    "hamartiology",
    "sacramentology",
    "soteriology",
    "ecclesiology",
    "eschatology"
];

const categoryTitles = {
    "theology_proper": "Theology Proper",
    "christology": "Christology",
    "bibliology": "Bibliology",
    "pneumatology": "Pneumatology",
    "hamartiology": "Hamartiology",
    "sacramentology": "Sacramentology",
    "soteriology": "Soteriology",
    "ecclesiology": "Ecclesiology",
    "eschatology": "Eschatology"
};

const resultsMapping = {
    "theology_proper": {
        "classical_trinitarianism": "Classical Trinitarianism",
        "monarchical_trinitarianism": "Monarchical Trinitarianism",
        "social_trinitarianism": "Social Trinitarianism",
        "unitarian_monotheism": "Unitarian Monotheism",
        "modalistic_monarchianism": "Modalistic Monarchianism",
        "binitarianism": "Binitarianism",
        "tritheism": "Tritheism",
        "process_panentheism": "Process Panentheism",
        "monistic_idealism": "Monistic Idealism"
    },
    "christology": {
        "chalcedonian_dyophysitism": "Dyophysitism",
        "miaphysitism": "Miaphysitism",
        "nestorianism": "Nestorianism",
        "monophysitism": "Monophysitism",
        "celestial_flesh": "Celestial Flesh",
        "subordinationism": "Subordinationism",
        "arianism": "Arianism",
        "angelomorphism": "Angelomorphism",
        "premortal_firstborn": "Premortal Firstborn",
        "socinianism": "Socinianism",
        "adoptionism": "Adoptionism",
        "docetism": "Docetism"
    },
    "bibliology": {
        "magisterialism": "Magisterialism",
        "conciliarism": "Conciliarism",
        "prima_scriptura": "Prima Scriptura",
        "sola_scriptura": "Sola Scriptura",
        "nuda_scriptura": "Nuda Scriptura",
        "continuing_revelation": "Continuing Revelation",
        "spiritualism": "Spiritualism",
        "neo_orthodoxy": "Neo-Orthodoxy",
        "modernism": "Modernism"
    },
    "pneumatology": {
        "glossolalism": "Glossolalism",
        "continuationism": "Continuationism",
        "cessationism": "Cessationism",
        "perfectionism": "Perfectionism",
        "sacramentalism": "Sacramentalism",
        "dynamism": "Dynamism",
        "immanentism": "Immanentism"
    },
    "hamartiology": {
        "total_depravity": "Total Depravity",
        "wounded_nature": "Wounded Nature",
        "ancestral_sin": "Ancestral Sin",
        "pelagianism": "Pelagianism",
        "necessary_fall": "The Necessary Fall",
        "naturalism": "Naturalism",
        "spiritual_idealism": "Spiritual Idealism"
    },
    "sacramentology": {
        "transubstantiation": "Transubstantiation",
        "mystical_realism": "Mystical Realism",
        "sacramental_union": "Sacramental Union",
        "pneumatic_presence": "Pneumatic Presence",
        "baptismal_remission": "Baptismal Remission",
        "memorialism": "Memorialism",
        "asacramentalism": "Asacramentalism"
    },
    "soteriology": {
        "forensic_justification": "Forensic Justification",
        "infused_righteousness": "Infused Righteousness",
        "theosis": "Theosis",
        "covenantal_nomism": "Covenantal Nomism",
        "moral_influence": "Moral Influence"
    },
    "ecclesiology": {
        "centralism": "Centralism",
        "episcopacy": "Episcopacy",
        "presbyterianism": "Presbyterianism",
        "congregationalism": "Congregationalism",
        "non_clerical": "Non-Clerical"
    },
    "eschatology": {
        "amillennialism": "Amillennialism",
        "premillennialism": "Premillennialism",
        "dispensationalism": "Dispensationalism",
        "postmillennialism": "Postmillennialism",
        "preterism": "Preterism"
    }
};

const subCategories = {
    "theology_proper": {
        "trinitarian": [
            "classical_trinitarianism",
            "monarchical_trinitarianism",
            "social_trinitarianism"
        ],
        "monarchian": [
            "unitarian_monotheism",
            "modalistic_monarchianism"
        ],
        "plural_dual": [
            "binitarianism",
            "tritheism"
        ],
        "idealist_process": [
            "process_panentheism",
            "monistic_idealism"
        ]
    },
    "christology": {
        "incarnation_orthodox": [
            "chalcedonian_dyophysitism",
            "miaphysitism",
            "nestorianism"
        ],
        "spiritual_flesh": [
            "monophysitism",
            "celestial_flesh",
            "docetism"
        ],
        "subordinate_pre_existent": [
            "subordinationism",
            "arianism",
            "angelomorphism",
            "premortal_firstborn"
        ],
        "mortal_human": [
            "socinianism",
            "adoptionism"
        ]
    },
    "bibliology": {
        "tradition_magisterium": [
            "magisterialism",
            "conciliarism",
            "prima_scriptura"
        ],
        "scripture_alone": [
            "sola_scriptura",
            "nuda_scriptura"
        ],
        "pneumatic_prophetic": [
            "continuing_revelation",
            "spiritualism"
        ],
        "modernist_dynamic": [
            "neo_orthodoxy",
            "modernism"
        ]
    },
    "pneumatology": {
        "charismatic_experiential": [
            "glossolalism",
            "continuationism",
            "perfectionism"
        ],
        "normative_order": [
            "cessationism",
            "sacramentalism"
        ],
        "nontraditional_spirit": [
            "dynamism",
            "immanentism"
        ]
    },
    "hamartiology": {
        "classical_fall": [
            "total_depravity",
            "wounded_nature",
            "ancestral_sin"
        ],
        "minimal_fall": [
            "pelagianism",
            "necessary_fall"
        ],
        "non_fall": [
            "naturalism",
            "spiritual_idealism"
        ]
    },
    "sacramentology": {
        "real_presence": [
            "transubstantiation",
            "mystical_realism",
            "sacramental_union"
        ],
        "spiritual_covenant": [
            "pneumatic_presence"
        ],
        "ordinance_believer": [
            "baptismal_remission",
            "memorialism"
        ],
        "inward_only": [
            "asacramentalism"
        ]
    },
    "soteriology": {
        "forensic_imputation": [
            "forensic_justification"
        ],
        "transformative_union": [
            "infused_righteousness",
            "theosis"
        ],
        "covenant_fidelity": [
            "covenantal_nomism"
        ],
        "moral_exemplar": [
            "moral_influence"
        ]
    },
    "ecclesiology": {
        "hierarchical_oversight": [
            "centralism",
            "episcopacy"
        ],
        "deliberative_local": [
            "presbyterianism",
            "congregationalism"
        ],
        "non_hierarchical": [
            "non_clerical"
        ]
    },
    "eschatology": {
        "premillennial_kingdom": [
            "premillennialism",
            "dispensationalism"
        ],
        "present_or_post_kingdom": [
            "amillennialism",
            "postmillennialism"
        ],
        "fulfilled_kingdom": [
            "preterism"
        ]
    }
};

const incompatibleSubCategories = {
    "trinitarian": ["monarchian", "plural_dual", "idealist_process"],
    "monarchian": ["trinitarian", "plural_dual"],
    "plural_dual": ["trinitarian", "monarchian", "idealist_process"],
    "idealist_process": ["trinitarian", "plural_dual"],

    "incarnation_orthodox": ["subordinate_pre_existent", "mortal_human"],
    "spiritual_flesh": ["subordinate_pre_existent", "mortal_human"],
    "subordinate_pre_existent": ["incarnation_orthodox", "spiritual_flesh", "mortal_human"],
    "mortal_human": ["incarnation_orthodox", "spiritual_flesh", "subordinate_pre_existent"],

    "tradition_magisterium": ["scripture_alone", "pneumatic_prophetic", "modernist_dynamic"],
    "scripture_alone": ["tradition_magisterium", "pneumatic_prophetic", "modernist_dynamic"],
    "pneumatic_prophetic": ["tradition_magisterium", "scripture_alone", "modernist_dynamic"],
    "modernist_dynamic": ["tradition_magisterium", "scripture_alone", "pneumatic_prophetic"],

    "charismatic_experiential": ["nontraditional_spirit"],
    "normative_order": ["nontraditional_spirit"],
    "nontraditional_spirit": ["charismatic_experiential", "normative_order"],

    "classical_fall": ["minimal_fall", "non_fall"],
    "minimal_fall": ["classical_fall", "non_fall"],
    "non_fall": ["classical_fall", "minimal_fall"],

    "real_presence": ["ordinance_believer", "inward_only"],
    "spiritual_covenant": ["inward_only"],
    "ordinance_believer": ["real_presence", "inward_only"],
    "inward_only": ["real_presence", "spiritual_covenant", "ordinance_believer"],

    "forensic_imputation": ["transformative_union", "covenant_fidelity", "moral_exemplar"],
    "transformative_union": ["forensic_imputation", "covenant_fidelity", "moral_exemplar"],
    "covenant_fidelity": ["forensic_imputation", "transformative_union", "moral_exemplar"],
    "moral_exemplar": ["forensic_imputation", "transformative_union", "covenant_fidelity"],
    
    "hierarchical_oversight": ["deliberative_local", "non_hierarchical"],
    "deliberative_local": ["hierarchical_oversight", "non_hierarchical"],
    "non_hierarchical": ["hierarchical_oversight", "deliberative_local"],

    "premillennial_kingdom": ["present_or_post_kingdom", "fulfilled_kingdom"],
    "present_or_post_kingdom": ["premillennial_kingdom", "fulfilled_kingdom"],
    "fulfilled_kingdom": ["premillennial_kingdom", "present_or_post_kingdom"]
};

const denominationFamilies = {
    "Apostolic": [
        "Roman Catholicism",
        "Eastern Orthodoxy",
        "Oriental Orthodoxy"
    ],
    "Protestant": [
        "Confessional Lutheran",
        "Presbyterian"
    ],
};

const denominationMapping = {
    /* Apostolic */
    "classical_trinitarianism|chalcedonian_dyophysitism|magisterialism|sacramentalism|wounded_nature|transubstantiation|infused_righteousness|centralism|amillennialism": "Roman Catholicism",
    "monarchical_trinitarianism|chalcedonian_dyophysitism|conciliarism|sacramentalism|ancestral_sin|mystical_realism|theosis|episcopacy|amillennialism": "Eastern Orthodoxy",
    "monarchical_trinitarianism|miaphysitism|conciliarism|sacramentalism|ancestral_sin|mystical_realism|theosis|episcopacy|amillennialism": "Oriental Orthodoxy",

    /* Protestant */
    "classical_trinitarianism|chalcedonian_dyophysitism|sola_scriptura|cessationism|total_depravity|sacramental_union|forensic_justification|congregationalism|amillennialism": "Confessional Lutheran",
    "classical_trinitarianism|chalcedonian_dyophysitism|sola_scriptura|cessationism|total_depravity|pneumatic_presence|forensic_justification|presbyterianism|amillennialism": "Presbyterian"
};

const denominationColors = {
    "No exact match": "#5C5C5C",

    "Roman Catholicism": "#E5A93C",
    "Eastern Orthodoxy": "#2E5B88",
    "Oriental Orthodoxy": "#8B2635",
    
    "Confessional Lutheran": "#3B7A57",
    "Presbyterian": "#4A6B82"
};

const descriptions = {
    /* Theology Proper */
    "classical_trinitarianism": "God is one undivided, immaterial essence eternally subsisting as three co-equal persons (Father, Son, and Holy Spirit), defined by divine simplicity, immutability, and impassibility.",
    "monarchical_trinitarianism": "Affirms three consubstantial persons whose unity is grounded strictly in the Monarchy of the Father as the sole unoriginate cause, distinguishing God's unknowable essence from His uncreated energies.",
    "social_trinitarianism": "Envisions the Trinity as an egalitarian communion of three distinct personal subjects and centers of consciousness bound by mutual, self-giving indwelling (perichoresis).",
    "unitarian_monotheism": "Holds that God is strictly and numerically one single person—the Father alone—denying deity or eternal pre-existence to the Son and viewing the Holy Spirit as God's impersonal active power.",
    "modalistic_monarchianism": "Maintains that God is one single person without internal personal distinctions, revealing Himself successively in the modes or roles of Father, Son, and Holy Spirit under the name of Jesus.",
    "binitarianism": "Affirms that the divine nature consists of exactly two eternal, co-equal divine persons—the Father and the Word (Son)—while defining the Holy Spirit as the shared divine presence or power.",
    "tritheism": "Holds that the Godhead consists of three separate, individual divine beings (Father, Son, and Holy Ghost) united in purpose and perfection rather than substance, with the Father and Son possessing physical bodies.",
    "process_panentheism": "Posits that God and the physical universe are interdependent and co-eternal, wherein the world exists within an evolving divine nature that affects and is affected by creaturely agency.",
    "monistic_idealism": "Asserts that God as Infinite Divine Mind or Spirit is the sole, all-encompassing reality, regarding physical matter, sin, and bodily death as metaphysical errors of mortal consciousness.",
    
    /* Christology */
    "chalcedonian_dyophysitism": "Jesus Christ is one personal hypostasis existing eternally in two whole, unconfused, distinct, and indivisible natures—fully God and fully man—possessing both a divine will and a human will.",
    "miaphysitism": "Christ is one incarnate person possessing a single unified divine-human nature (mia physis) without mixture or confusion, rejecting the post-incarnation division of Christ into two separate ongoing natures.",
    "nestorianism": "The divine Word and the human man Jesus retain distinct hypostases loosely united in an external prosopic union, distinguishing the divine Logos from the human temple who suffered on the cross.",
    "monophysitism": "In the Incarnation, Christ's human nature was entirely absorbed and dissolved by His divine nature like a drop of water into the sea, leaving Christ with an exclusively divine nature.",
    "celestial_flesh": "Christ did not receive His physical body from the fallen, corrupted seed of Mary, but brought a pure, holy celestial flesh directly from heaven that passed through Mary as water through a conduit.",
    "subordinationism": "The Son is truly divine, eternal, and pre-existent, begotten of the Father's essence, but eternally subordinate in rank, glory, and derived authority to the Father as the fountainhead of divinity.",
    "arianism": "Christ is a finite, created pre-existent being brought into existence by God out of nothing (ex nihilo)—the highest creation through whom the universe was made, but fundamentally not God.",
    "angelomorphism": "Christ is ontologically the first and highest created angel (specifically the Archangel Michael incarnated), who was sent to earth as a perfect human ransom and exalted back to heavenly glory.",
    "premortal_firstborn": "Jesus is the literal eldest spirit offspring of Heavenly Parents in the pre-mortal realm who volunteered in heaven to be the Savior, gained a physical body, and progressed to Godhood.",
    "socinianism": "Jesus had no metaphysical pre-existence prior to his conception in Mary's womb, but was miraculously virgin-born as a mortal human prophet and exalted to Lordship by God only after his resurrection.",
    "adoptionism": "Jesus was an ordinary human being born naturally of Mary and Joseph who lived with exceptional moral piety, whom God adopted as His titular Son at his baptism or resurrection.",
    "docetism": "Christ was a purely spiritual and divine entity whose physical body, material limitations, physical suffering, and death were only visionary illusions or phantasmal appearances.",
    
    /* Bibliology */
    "magisterialism": "Divine revelation can only be authoritatively interpreted and defined by an official, living institutional teaching office or designated organizational channel whose leadership possesses divine guidance or infallibility.",
    "conciliarism": "Divine truth is preserved through Holy Tradition, apostolic succession, patristic consensus, and the collective mind of the Church speaking authoritatively through Ecumenical Councils rather than a singular earthly head.",
    "prima_scriptura": "Scripture is the primary and supreme rule of faith, but it must be discerned through the dynamic coordination of Holy Tradition, human reason, and personal spiritual experience.",
    "sola_scriptura": "The closed sixty-six-book biblical canon is the sole infallible rule of faith and practice, with historic creeds and confessions serving as fallible ministerial authorities strictly subordinate to the text.",
    "nuda_scriptura": "The bare text of the Bible alone is the sole authority for believers with no creeds, catechisms, or church traditions permitted, relying solely on simple, common-sense literal reading.",
    "continuing_revelation": "The biblical canon is open and incomplete, requiring living contemporary apostles and prophets who receive ongoing public revelation, divine scripture, and restorative authority from God.",
    "spiritualism": "The immediate, living presence of the Holy Spirit (the Inner Light) within the believer is the supreme authority, to which the outward written letter of the Bible is a secondary historical witness.",
    "neo_orthodoxy": "Jesus Christ alone is the true Word of God; the Bible is a human historical witness that becomes the living Word of God dynamically whenever the Holy Spirit encounters the reader in faith.",
    "modernism": "The Bible is an ancient human cultural artifact containing historical and moral errors, possessing no binding supernatural authority and subject to evaluation by reason, science, and ethical conscience.",

    /* Pneumatology */
    "glossolalism": "The baptism in the Holy Spirit is an empowering crisis experience distinct from and subsequent to conversion, invariably accompanied by the mandatory initial physical sign of speaking in tongues.",
    "continuationism": "All miraculous spiritual gifts distributed in the New Testament continue to operate in the church today, but speaking in tongues is not a mandatory sign of Spirit baptism.",
    "cessationism": "The Holy Spirit works primarily through the written Word of God, as all supernatural sign-gifts and revelatory manifestations permanently ceased with the close of the apostolic age.",
    "perfectionism": "The defining post-conversion work of the Holy Spirit is heart purity and moral renewal, delivering the believer from the dominion of willful sin and empowering holy living.",
    "sacramentalism": "The personal gift and seal of the Holy Spirit is conveyed objectively through the historic sacraments of the Church—primarily Baptism and Chrismation or Confirmation—administered by apostolic authority.",
    "dynamism": "The Holy Spirit is not a distinct conscious person or divine entity, but God's invisible, impersonal active force and energy by which He accomplishes His sovereign will.",
    "immanentism": "The Holy Spirit is not a supernatural metaphysical entity, but the immanent divine impulse of love, evolving moral consciousness, and ethical community within humanity.",
    
    /* Hamartiology */
    "total_depravity": "Humanity inherits both Adam's legal guilt and a thoroughly corrupted nature, rendering the human will in spiritual bondage and entirely incapable of seeking or choosing God without prior sovereign regeneration.",
    "wounded_nature": "Original sin is an inherited privation of original righteousness that wounded human nature, leaving the will weakened and prone to concupiscence but still retaining the capacity to cooperate with divine grace.",
    "ancestral_sin": "Humanity inherits physical mortality, corruptibility, and an inclination toward sin from Adam, but bears zero inherited legal guilt, leaving human free will intact to respond synergistically to God.",
    "pelagianism": "There is no inherited original sin or corruption; every human is born morally neutral with the full natural capacity to choose righteousness and obey God's commands without special enabling grace.",
    "necessary_fall": "The Fall of Adam was not a tragic ruinous catastrophe, but a necessary, planned progression that opened the door to mortal physical life and ultimate spiritual exaltation.",
    "naturalism": "There was no historical Adam or cosmic Fall; human selfishness and moral failure are biological survival instincts arising from evolutionary origins rather than spiritual corruption.",
    "spiritual_idealism": "Sin, mortal limitation, and physical depravity are not metaphysical realities, but illusory errors of mortal consciousness that disappear as one recognizes human unity with the Divine Mind.",
    
    /* Sacramentology */
    "transubstantiation": "In the Eucharistic sacrifice, the underlying substance of bread and wine is converted into the literal Body and Blood of Christ while outward accidents remain, with the seven sacraments working objectively ex opere operato.",
    "mystical_realism": "The bread and wine truly become the literal Body and Blood of Christ through the epiklesis of the Holy Spirit as an unsearchable holy mystery, rejecting Western scholastic definitions of substance and accidents.",
    "sacramental_union": "Christ's true physical body and blood are substantially received in, with, and under the bread and wine, rejecting transubstantiation while affirming that infant baptism genuinely regenerates through the Word.",
    "pneumatic_presence": "Sacraments are covenant signs and seals wherein Christ is spiritually and pneumatically present to faith during communion, rather than physically present on the altar.",
    "baptismal_remission": "Water baptism by immersion of an accountable believer is the necessary instrument for the actual remission of sins and salvation, while the Lord's Supper functions strictly as a symbolic weekly memorial.",
    "memorialism": "Baptism and the Lord's Supper are purely non-saving symbolic ordinances, with believer's immersion testifying to an already accomplished salvation and communion serving as a memorial remembrance.",
    "asacramentalism": "Physical water, bread, and wine are outward ceremonial shadows with no place in New Covenant worship, as true baptism and communion are entirely inward spiritual realities.",
    
    /* Soteriology */
    "forensic_justification": "Salvation is an instantaneous legal acquittal wherein God imputes the alien righteousness of Christ to the believer through faith alone, without human merit, obedience, or sacramental works contributing to justification.",
    "infused_righteousness": "Justification is an inward moral transformation where sanctifying grace is infused into the soul, making the believer actually righteous and requiring faith working through charity and sacramental cooperation for final salvation.",
    "theosis": "Salvation is the lifelong ontological transfiguration and deification of human nature through participation in God's uncreated divine energies, overcoming death and corruption rather than satisfying legal debt.",
    "covenantal_nomism": "Salvation is strictly conditional upon active covenant discipleship, requiring faith combined with lifelong obedience to God's commandments, moral laws, and prescribed ordinances.",
    "moral_influence": "Salvation is an inward moral and ethical awakening inspired by Christ's supreme demonstration of sacrificial love, rejecting penal substitution, blood satisfaction, and forensic legal models.",

    /* Ecclesiology */
    "centralism": "Legitimate divine governing authority resides in a single, supreme earthly seat, visible head, or centralized theocratic council whose oversight defines the boundary of the true Church.",
    "episcopacy": "The Church is governed by colleges of bishops holding historic apostolic succession who oversee regional churches and convene in conciliar synods as equals under the headship of Christ alone.",
    "presbyterianism": "The Church is governed by graded, representative assemblies of ordained elders (presbyters) possessing equal ministerial rank, rejecting monarchical bishops while maintaining connectional authority.",
    "congregationalism": "Every local gathered congregation is autonomous and self-governing under Christ alone, rejecting binding external oversight from bishops, presbyteries, or centralized headquarters.",
    "non_clerical": "The Church possesses no ordained clergy, sacerdotal offices, or institutional governing apparatus, operating as an egalitarian spiritual fellowship led directly by the Holy Spirit without human hierarchy.",

    /* Eschatology */
    "amillennialism": "The 'thousand years' of Revelation represents Christ's present spiritual reign over the Church from heaven, culminating in a single bodily return at the end of the age for the general resurrection and final judgment without a future earthly political millennium.",
    "premillennialism": "Christ returns bodily after the Great Tribulation to inaugurate a literal earthly millennial kingdom alongside the resurrected saints, rejecting a secret pre-tribulation rapture and maintaining a single continuous covenant community.",
    "dispensationalism": "God maintains distinct prophetic programs for Israel and the Church, with Christ returning in two stages: an initial secret pre-tribulation rapture of the Church, followed by an earthly millennium restoring national and Davidic promises to ethnic Israel.",
    "postmillennialism": "The Church will progressively Christianize world culture and civil governments through the proclamation of the Gospel, inaugurating a prolonged golden age of earthly righteousness and peace prior to Christ's bodily return.",
    "preterism": "Major biblical apocalyptic prophecies, including the Great Tribulation and the arrival of the Kingdom, were largely or entirely fulfilled in the first century through the destruction of Jerusalem in 70 AD and the close of the Old Covenant order."
};

const iconSources = {
    // theology_proper
    "classical_trinitarianism": "",
    "monarchical_trinitarianism": "",
    "social_trinitarianism": "",
    "unitarian_monotheism": "",
    "modalistic_monarchianism": "",
    "binitarianism": "",
    "tritheism": "",
    "process_panentheism": "",
    "monistic_idealism": "",

    // christology
    "chalcedonian_dyophysitism": "",
    "miaphysitism": "",
    "nestorianism": "",
    "monophysitism": "",
    "celestial_flesh": "",
    "subordinationism": "",
    "arianism": "",
    "angelomorphism": "",
    "premortal_firstborn": "",
    "socinianism": "",
    "adoptionism": "",
    "docetism": "",
    
    // bibliology
    "magisterialism": "",
    "conciliarism": "",
    "prima_scriptura": "",
    "sola_scriptura": "",
    "nuda_scriptura": "",
    "continuing_revelation": "",
    "spiritualism": "",
    "neo_orthodoxy": "",
    "modernism": "",

    // pneumatology
    "glossolalism": "",
    "continuationism": "",
    "cessationism": "",
    "perfectionism": "",
    "sacramentalism": "",
    "dynamism": "",
    "immanentism": "",

    // hamartiology
    "total_depravity": "",
    "wounded_nature": "",
    "ancestral_sin": "",
    "pelagianism": "",
    "necessary_fall": "",
    "naturalism": "",
    "spiritual_idealism": "",

    // sacramentology
    "transubstantiation": "",
    "mystical_realism": "",
    "sacramental_union": "",
    "pneumatic_presence": "",
    "baptismal_remission": "",
    "memorialism": "",
    "asacramentalism": "",

    // soteriology
    "forensic_justification": "",
    "infused_righteousness": "",
    "theosis": "",
    "covenantal_nomism": "",
    "moral_influence": "",

    // ecclesiology
    "centralism": "",
    "episcopacy": "",
    "presbyterianism": "",
    "congregationalism": "",
    "non_clerical": "",

    // eschatology
    "amillennialism": "",
    "premillennialism": "",
    "dispensationalism": "",
    "postmillennialism": "",
    "preterism": ""
};