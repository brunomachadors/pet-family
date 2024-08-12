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

const AboutPage = () => {
  return (
    <Container>
      <StyledHeader>Sobre o Projeto</StyledHeader>
      <StyledParagraph>
        O projeto nasceu com o objetivo de auxiliar na administração das tarefas
        relacionadas à minha cadela, Pantufa. Com o tempo, percebi que essa
        ideia poderia ser ampliada para oferecer ainda mais funcionalidades
        úteis e práticas para outros amantes de pets. Estamos desenvolvendo
        diversas features que visam facilitar a vida dos usuários e proporcionar
        uma experiência mais completa e intuitiva.
      </StyledParagraph>
      <StyledParagraph>
        Acreditamos que os pets são parte fundamental da nossa família e nosso
        objetivo é ajudar as pessoas a cuidarem cada vez melhor dos seus animais
        de estimação. Estamos comprometidos em oferecer soluções que melhorem o
        bem-estar dos pets e a qualidade de vida dos seus donos.
      </StyledParagraph>
      <StyledHeader>Equipe de Desenvolvimento</StyledHeader>
      <StyledParagraph>
        Este projeto é desenvolvido por uma equipe dedicada e apaixonada por
        tecnologia e design. Conheça os membros da nossa equipe:
      </StyledParagraph>
      <StyledList>
        <li>
          <strong>Bruno Machado</strong> - Fundador e Desenvolvedor
        </li>
        <li>
          <strong>Pablo Machado</strong> - DBA e Arquiteto de Sistemas
        </li>
        <li>
          <strong>Juliana Louis</strong> - Designer de Produto
        </li>
        <li>
          <strong>Aline Gorga</strong> - Gerente de Produto
        </li>
      </StyledList>

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
