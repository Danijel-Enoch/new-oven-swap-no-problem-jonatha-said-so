import { Heading, Flex, Text, useMatchBreakpointsContext } from '@pancakeswap/uikit'

const StatCardContent: React.FC<{ headingText: string; bodyText: string; highlightColor: string,ovenColor:string }> = ({
  headingText,
  bodyText,
  highlightColor,
  ovenColor,
}) => {
  const { isMobile, isTablet } = useMatchBreakpointsContext()
  const isSmallerScreen = isMobile || isTablet
  const split = headingText.split(' ')
  const lastWord = split.pop()
  const remainingWords = split.slice(0, split.length).join(' ')

  return (
    <Flex
      minHeight={[null, null, null, '168px']}
      minWidth="232px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, null, '64px']}
    >
      {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading color={ovenColor} scale="lg">{remainingWords}</Heading>
      ) : (
        <Heading color={ovenColor} scale="xl">{remainingWords}</Heading>
      )}
      <Heading color={highlightColor} scale="xl" mb="24px">
        {lastWord}
      </Heading>
      <Text color="textSubtle">{bodyText}</Text>
    </Flex>
  )
}

export default StatCardContent
