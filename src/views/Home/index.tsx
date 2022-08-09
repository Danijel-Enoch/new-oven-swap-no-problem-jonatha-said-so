import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import { infoSectionData } from './components/InfoSection/data'
import { earnInfoSectionData } from './components/EarnInfoSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import WinSection from './components/WinSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import LivePriceFeed from './components/LivePriceFeed'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import InfoSection from './components/InfoSection'
import TradeInfoSection from './components/TradeInfoSection'
import EarnInfoSection from './components/EarnInfoSection'
import MultipleBanner from './components/Banners/MultipleBanner'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '968px' }

  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      <StyledHeroSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'radial-gradient(103.12% 50% at 50% 50%, #ffff 0%, #F9AA4B 100%)'
            : 'linear-gradient(139.73deg, #ffff 0%, #F9AA4B 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        {/* {account && (
          <UserBannerWrapper>
            <UserBanner />
          </UserBannerWrapper>
        )} */}
        {/* <MultipleBanner /> */}
        <Hero />
      </StyledHeroSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background={
          theme.isDark
            ? 'linear-gradient(180deg, #FFFFFF 22%, #FFFFFF 100%)'
            : 'linear-gradient(180deg, #FFFFFF 22%, #FFFFFF 100%)'
        }
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          {/* <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper> */}
        </OuterWedgeWrapper>
        <SalesSection {...swapSectionData(t)} />
      </PageSection>

      {/* //////// */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <OuterWedgeWrapper>
          {/* <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper> */}
        </OuterWedgeWrapper>
        <InfoSection {...infoSectionData(t)} />
      </PageSection>
      {/* //// */}

      {/* ///// */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        {/* <OuterWedgeWrapper>
          <InnerWedgeWrapper width="150%" top fill={theme.colors.background}>
            <WedgeTopRight />
          </InnerWedgeWrapper>
        </OuterWedgeWrapper> */}
        <TradeInfoSection {...earnSectionData(t)} />
        <FarmsPoolsRow />
      </PageSection>
      {/* ////// */}

      {/* //////// */}
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        {/* <OuterWedgeWrapper> */}
        {/* <InnerWedgeWrapper top fill={theme.isDark ? '#201335' : '#D8CBED'}>
            <WedgeTopLeft />
          </InnerWedgeWrapper> */}
        {/* </OuterWedgeWrapper> */}
        <EarnInfoSection {...earnInfoSectionData(t)} />
      </PageSection>
      {/* //// */}

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData(t)} />
      </PageSection>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background={theme.colors.background}
        index={2}
        hasCurvedDivider={false}
      >
        <WinSection />
      </PageSection>

      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(180deg, #ffff 0%, #ffff 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
        <CakeDataRow />
      </PageSection>
    </>
  )
}

export default Home
