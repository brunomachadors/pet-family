'use client';
import {
  Container,
  SocialLink,
  SocialLinksContainer,
  StyledHeader,
  StyledParagraph,
  StyledList,
} from './style';
import { LinkedInIcon, GitHubIcon, EmailIcon } from '../../assets/icons';
import { client } from '@/app/utils/content/contentful';
import { useEffect, useState } from 'react';
import { AboutFields } from '@/app/types/content';

const AboutPage = () => {
  const [about, setAbout] = useState<AboutFields | null>(null);

  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'about',
        });

        const aboutContent = response.items[0].fields;

        const validatedAbout: AboutFields = {
          title:
            typeof aboutContent.title === 'string' ? aboutContent.title : '',
          description:
            typeof aboutContent.description === 'string'
              ? aboutContent.description
              : '',
          complementaryDescription:
            typeof aboutContent.complementaryDescription === 'string'
              ? aboutContent.complementaryDescription
              : '',
          subTitle:
            typeof aboutContent.subTitle === 'string'
              ? aboutContent.subTitle
              : '',
          subDescription:
            typeof aboutContent.subDescription === 'string'
              ? aboutContent.subDescription
              : '',
          listNames: Array.isArray(aboutContent.listNames)
            ? aboutContent.listNames.filter((item) => typeof item === 'string')
            : [],
        };

        setAbout(validatedAbout);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAboutInfo();
  }, []);

  return (
    <Container>
      {about ? (
        <>
          <StyledHeader>{about.title}</StyledHeader>
          <StyledParagraph>{about.description}</StyledParagraph>
          <StyledParagraph>{about.complementaryDescription}</StyledParagraph>
          <StyledHeader>{about.subTitle}</StyledHeader>
          <StyledParagraph>{about.subDescription}</StyledParagraph>
          <StyledList>
            {about.listNames.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </StyledList>
        </>
      ) : (
        <>
          <StyledHeader>Carregando...</StyledHeader>
        </>
      )}

      <SocialLinksContainer>
        <SocialLink
          href="https://www.linkedin.com/in/brunomrs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </SocialLink>
        <SocialLink
          href="https://github.com/brunomachadors/pet-family"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </SocialLink>
        <SocialLink href="mailto:brunomachadors@gmail.com">
          <EmailIcon />
        </SocialLink>
      </SocialLinksContainer>
    </Container>
  );
};

export default AboutPage;
