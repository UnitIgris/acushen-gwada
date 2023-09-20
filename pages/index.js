import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Divider, Heading, Text } from '@chakra-ui/react';

const Index = () => {
  const [backgroundColor, setBackgroundColor] = useState('#30391c');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 500) {
        setBackgroundColor('#F3F8EA');
      } else {
        setBackgroundColor('#30391c');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <main >
      <Box className='main-wrapper'>
        <Box className='main-content'>
          <Box className='section-hero'>
            <Box className='container-heading'>
              <Box className='heading-layout'>
                <Heading variant="heading-title"  >We don't strive to be the best studio in the world ,we strive to be the best studio in your world. Let's get your project done right the first time.</Heading>
                <Button>
                  SCHEDULE A CALL
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className='section-about'>
            <Box className='container-content'>
              <Box className='title'>
                <Heading variant={'heading-italic'}>À-propos</Heading>
              </Box>
              <Box className='layout-content'>
                <Text style={{ opacity: "1", maxWidth: "130px", width: "20%" }}>Harmonie et équilibre</Text>
                <Box className='content'>
                  <Box className='main-block'>
                    <Heading variant={"heading-3"}>
                      La médecine chinoise au service de votre bien-être
                    </Heading>
                    <Text>
                      La Médecine Chinoise, un trésor de sagesse millénaire, considère chaque
                      individu comme un tout indissociable de son environnement, de ses besoins et
                      de ses émotions. C'est en explorant cette globalité que cette discipline
                      ancestrale identifie et traite les causes profondes des déséquilibres.
                      Elle repose sur des théories fondatrices universellement reconnues et
                      demeure une source d'inspiration pour les praticiens et chercheurs à travers
                      le monde.
                    </Text>
                  </Box>
                  <Box className='sub-block'>
                    <Box style={{ display: "flex", gap: "13px", flexDirection: "column" }}>
                      <Heading className='sub-title'>Troubles fonctionnels et fouleurs</Heading>
                      <Text>
                        Solutions pour la fatigue, maux de tête,
                        vertiges, douleurs aiguës ou chroniques.
                      </Text>
                    </Box>
                    <Box style={{ display: "flex", gap: "13px", flexDirection: "column" }}>
                      <Heading className='sub-title'>Équilibre digestif et respiratoire</Heading>
                      <Text>
                        Restauration de l'harmonie pour les troubles digestifs,
                        respiratoires aigus ou chroniques.
                      </Text>
                    </Box>
                    <Box style={{ display: "flex", gap: "13px", flexDirection: "column" }}>
                      <Heading className='sub-title'>Appareil urinaire, reproducteur et grossesse</Heading>
                      <Text>
                        Solutions sur mesure pour fertilité, ménopause,
                        grossesse épanouie, troubles urinaires et reproducteurs.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className='section-tech-info'>
            <Box className='container-content'>
              <Box className='title'>
                <Heading variant={'heading-italic'}>Techniques</Heading>
              </Box>
              <Box className='layout-content'>
                <Text style={{ opacity: "1", maxWidth: "130px", width: "20%" }}>Thérapies énergétiques</Text>
                <Box className='content'>
                  <Box className='service-item' >
                    <Heading variant={"heading-3"}>
                      Acupuncture
                    </Heading>
                    <Text>
                      La Médecine Chinoise enseigne que le corps humain est traversé de haut
                      en bas par un réseau immatériel où circule le Qi, une énergie vitale.
                      Ces voies sont appelées méridiens, sur lesquels se trouvent des points
                      cutanés spécifiques que le praticien stimule pour rétablir la circulation
                      énergétique dans l'organisme.
                    </Text>
                  </Box>
                  <Box className='service-item' >
                    <Heading variant={"heading-3"}>
                      Guasha
                    </Heading>
                    <Text>
                      Le Guasha est une technique énergique qui implique un frottement vigoureux
                      d'une zone spécifique du corps à l'aide d'un outil dédié. Son objectif
                      est d'améliorer la circulation sanguine pour éliminer les toxines et soulager
                      les tensions musculaires.
                    </Text>
                  </Box>
                  <Box className='service-item' >
                    <Heading variant={"heading-3"}>
                      Moxibustion
                    </Heading>
                    <Text>
                      La moxibustion consiste à stimuler précisément des points ou des zones du corps
                      avec de l'armoise chauffée. Cette technique vise à activer et favoriser la
                      circulation de l'énergie (Qi) et du sang à travers les méridiens.
                    </Text>
                  </Box>
                  <Box className='service-item' >
                    <Heading variant={"heading-3"}>
                      Auriculothérapie
                    </Heading>
                    <Text>
                      L'auriculothérapie considère le pavillon de l'oreille comme une représentation en
                      miniature du corps humain, avec la tête en bas. Cette méthode implique la
                      stimulation de points spécifiques du pavillon de l'oreille à l'aide de dispositifs
                      tels que des graines, des aimants ou des punaises.
                    </Text>
                  </Box>
                  <Box className='service-item' >
                    <Heading variant={"heading-3"}>
                      Thérapie par les Ventouses
                    </Heading>
                    <Text>
                      La thérapie par les ventouses est une pratique présente dans de nombreuses cultures.
                      Elle implique l'application de ventouses sur la peau pour stimuler la circulation
                      de l'énergie et du sang, soulageant ainsi divers troubles et débloquant les méridiens.
                    </Text>
                  </Box>
                  <Box className='service-item' >
                    <Heading variant={"heading-3"}>
                      Tuina Pédiatrique
                    </Heading>
                    <Text>
                      Un massage doux et sans risque d'effets secondaires, adapté aux tout-petits de 0 à 3 ans.
                      Il vise à corriger en douceur des déséquilibres courants tels que les troubles digestifs,
                      urinaires et de la sphère ORL. La durée et la fréquence des séances varient de 15 à 30
                      minutes en fonction de l'âge et du déséquilibre à corriger. Il peut également renforcer
                      le système immunitaire et favoriser le développement harmonieux des tout-petits.
                    </Text>
                  </Box>
                  <Box className='service-item' >
                    <Heading variant={"heading-3"}>
                      Acupuncture Esthétique Faciale
                    </Heading>
                    <Text>
                      Une méthode pour ralentir le vieillissement cutané en stimulant la circulation sanguine
                      et en tonifiant les muscles du visage avec des aiguilles. Le lifting est progressif,
                      le nombre de séances est variable. Idéal en prévention (une séance mensuelle) ou dès
                      les premiers signes de relâchement. Efficace contre les rides installées, avec un bilan
                      énergétique lors de la première séance pour corriger les déséquilibres internes.
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className='section-price'>
            <Box className='container-content'>
              <Box className='title'>
                <Heading variant={'heading-italic'}>Tarifs</Heading>
              </Box>
              <Box className='layout-content'>
                <Box className='price-item'>
                  <Text className='title'>
                    Acupuncture
                  </Text>
                  <Box className='info'>
                    <Text className='time'>
                      1h30-1h
                    </Text>
                    <Text className='text'>
                      Tarification dégressive si nécessité de plusieurs séances pour la même problématique.
                    </Text>
                  </Box>
                  <Text className='price'>
                    60 €
                  </Text>
                </Box>
                <Box className='price-item'>
                  <Text className='title'>
                    Aculifting
                  </Text>
                  <Box className='info'>
                    <Text className='time'>
                      1h30
                    </Text>
                    <Text className='text'>
                      Forfait 5 séances: 60 € / séance
                    </Text>
                  </Box>
                  <Text className='price'>
                    75 €
                  </Text>
                </Box>
                <Box className='price-item'>
                  <Text className='title'>
                    Ventouses OU upping therapy
                  </Text>
                  <Box className='info'>
                    <Text className='time'>
                      1h
                    </Text>
                    <Text className='text'>
                      Tarification dégressive si nécessité de plusieurs séances pour la même problématique.
                    </Text>
                  </Box>
                  <Text className='price'>
                    40 €
                  </Text>
                </Box>
                <Box className='price-item'>
                  <Text className='title'>
                    Tuina pédiatrique
                  </Text>
                  <Box className='info'>
                    <Text className='time'>
                      1h30-1h
                    </Text>
                    <Text className='text'>
                      Tarification dégressive si nécessité de plusieurs séances pour la même problématique.
                    </Text>
                  </Box>
                  <Text className='price'>
                    40 €
                  </Text>
                </Box>



              </Box>
            </Box>
          </Box>


        </Box>
        <nav className='navbar' style={{
          backgroundColor: backgroundColor,
          willChange: 'background-color'
        }}>
          <Box className='menu-wrapper'>
            <Box className='menu-layout'>
              <a>Home</a>
              <a>À-propos</a>
              <a>Techniques</a>
              <a>Tarifs</a>
              <a>Contact</a>
            </Box>
          </Box>
          <Box className='info'>
            <Text> Studios is the Los Angeles design and development studio that feel more like your partners. We specialize in Webflow.</Text>
            <Button>Acushen Gwada</Button>
          </Box>
        </nav>
      </Box>
      <Box className='footer'>
        <Box></Box>
        <Box className='full-logo'></Box>
      </Box>
    </main>
  )
}

export default Index