import { FunctionComponent, useCallback } from "react";
import styles from "./DaoContainer.module.css";

const DaoContainer: FunctionComponent = () => {
  const onViewOnChainButtonClick = useCallback(() => {
    window.open(
      "https://polygonscan.com/token/0x44d09156c7b4acf0c64459fbcced7613f5519918"
    );
  }, []);

  return (
    <div className={styles.daoContainer}>
      <h1 className={styles.treasuryTitleDescription}>Treasury</h1>
      <div className={styles.treasuryTitleDescription1}>
        Sodales neque sodales ut etiam sit amet nisl purus in. Adipiscing diam
        donec adipiscing tristique risus nec feugiat in.
      </div>
      <div className={styles.treasuryStatsContainer}>
        <form className={styles.treasuryStatsContent}>
          <div className={styles.tokenAddressContainer}>
            <img
              className={styles.addressIcon}
              loading="lazy"
              alt=""
              src="/addressicon.svg"
            />
            <div className={styles.tokenAddressDetailsContaine}>
              <div className={styles.tokenAddressTitle}>
                official token contract address
              </div>
              <div className={styles.tokenAddressPlaceholder}>
                0x44d09156c7b4ACf0C64459Fbcced7613F5519918
              </div>
            </div>
            <button
              className={styles.viewOnChainButton}
              onClick={onViewOnChainButtonClick}
            >
              <b className={styles.treasuryDetailsContainer}>VIEW ON CHAIN</b>
            </button>
          </div>
          <div className={styles.treasuryDetailsContainer1}>
            <div className={styles.treasury1Container}>
              <img
                className={styles.treasury1ContainerIcon}
                alt=""
                src="/treasury1containericon.svg"
              />
              <div className={styles.treasury1Content}>
                <div className={styles.treasury1Title}>Market Cap</div>
                <div className={styles.treasury1Data}>$596K</div>
              </div>
            </div>
            <div className={styles.treasury2Container}>
              <img
                className={styles.treasury2ContainerIcon}
                alt=""
                src="/treasury2containericon.svg"
              />
              <div className={styles.treasury2Content}>
                <div className={styles.treasury2Title}>
                  24 hour trading volume
                </div>
                <div className={styles.treasury2Data}>$1,565.61</div>
              </div>
            </div>
            <div className={styles.treasury3Container}>
              <img
                className={styles.treasury3ContainerIcon}
                loading="lazy"
                alt=""
                src="/treasury3containericon.svg"
              />
              <div className={styles.treasury3Content}>
                <div className={styles.treasury3Title}>
                  fully diluted valution
                </div>
                <div className={styles.treasury3Data}>$1.1M</div>
              </div>
            </div>
            <div className={styles.treasury4Container}>
              <img
                className={styles.treasury4ContainerIcon}
                alt=""
                src="/treasury4containericon.svg"
              />
              <div className={styles.treasury4Content}>
                <div className={styles.treasury4Title}>max supply</div>
                <div className={styles.treasury4Data}>100,000,000,000</div>
              </div>
            </div>
            <div className={styles.treasury5Container}>
              <img
                className={styles.treasury5ContainerIcon}
                alt=""
                src="/treasury5containericon.svg"
              />
              <div className={styles.treasury5Content}>
                <div className={styles.treasury5Title}>TVL (staking)</div>
                <div className={styles.treasury5Data}>6,276</div>
              </div>
            </div>
            <div className={styles.treasury6Container}>
              <img
                className={styles.treasury6ContainerIcon}
                alt=""
                src="/treasury6containericon.svg"
              />
              <div className={styles.treasury6Content}>
                <div className={styles.treasury6Title}>circulating supply</div>
                <div className={styles.treasury6Data}>35,061,803,502</div>
              </div>
            </div>
            <div className={styles.treasury7Container}>
              <img
                className={styles.treasury7ContainerIcon}
                alt=""
                src="/treasury7containericon.svg"
              />
              <div className={styles.treasury7Content}>
                <div className={styles.treasury7Title}>team wallets</div>
                <div className={styles.treasury7Data}>6</div>
              </div>
            </div>
            <div className={styles.treasury8Container}>
              <img
                className={styles.treasury8ContainerIcon}
                alt=""
                src="/treasury8containericon.svg"
              />
              <div className={styles.treasury8Content}>
                <div className={styles.treasury8Title}>holder wallets</div>
                <div className={styles.treasury8Data}>6,276</div>
              </div>
            </div>
            <div className={styles.treasury9Container}>
              <img
                className={styles.treasury9ContainerIcon}
                alt=""
                src="/treasury9containericon.svg"
              />
              <div className={styles.treasury9Content}>
                <div className={styles.treasury9Title}>Audit Score</div>
                <div className={styles.treasury9Data}>9.5/10</div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <h1 className={styles.tradingPairsTitle}>Trading Pairs</h1>
      <div className={styles.tradingPairsDescription}>
        Sodales neque sodales ut etiam sit amet nisl purus in. Adipiscing diam
        donec adipiscing tristique risus nec feugiat in.
      </div>
      <div className={styles.tradingPairsContainer}>
        <div className={styles.tradingPairsContent}>
          <div className={styles.tradingPairsTableHeaders}>
            <div className={styles.numberTitle}>#</div>
            <div className={styles.exchangeTitle}>Exchange</div>
            <div className={styles.pairTitle}>Pair</div>
            <div className={styles.priceTitle}>Price</div>
            <div className={styles.spreadTitle}>Spread</div>
            <div className={styles.hVolumeTitle}>24h Volume</div>
            <div className={styles.volumeTitle}>Volume %</div>
          </div>
          <div className={styles.tradingPairsRows}>
            <div className={styles.tradingPair1}>
              <div className={styles.tradingPair1Number}>1</div>
              <div className={styles.tradingPair1Exchange}>Quickswap</div>
              <div className={styles.tradingPair1Pair}>TOKEN/USDC</div>
              <div className={styles.tradingPair1Price}>0.00024</div>
              <div className={styles.tradingPair1Spread}>0.61%</div>
              <div className={styles.tradingPair124hVolume}>$34,027.33</div>
              <div className={styles.tradingPair1Volume}>50%</div>
            </div>
            <div className={styles.tradingPair2}>
              <div className={styles.tradingPair2Number}>2</div>
              <div className={styles.tradingPair2Exchange}>Uniswap</div>
              <div className={styles.tradingPair2Pair}>TOKEN/WETH</div>
              <div className={styles.tradingPair2Price}>0.00024</div>
              <div className={styles.tradingPair2Spread}>2.34%</div>
              <div className={styles.tradingPair224hVolume}>$1,027.33</div>
              <div className={styles.tradingPair2Volume}>50%</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tokenomicsTitle}>Tokenomics Allocation</div>
      <div className={styles.tokenomicsDescription}>
        Sodales neque sodales ut etiam sit amet nisl purus in. Adipiscing diam
        donec adipiscing tristique risus nec feugiat in.
      </div>
      <div className={styles.tokenomicsContainer}>
        <div className={styles.tokenomicsVisibilityContaine}>
          <div className={styles.tokenomicsVisibilityContent}>
            <div className={styles.seedRoundContainer}>
              <div className={styles.seedRoundContent}>
                <div className={styles.seedRoundColour} />
                <div className={styles.seedRoundTitle}>Seed Round</div>
              </div>
              <img
                className={styles.visibleIcon}
                alt=""
                src="/visibleicon.svg"
              />
            </div>
            <div className={styles.privateRoundContainer}>
              <div className={styles.privateRoundContent}>
                <div className={styles.privateRoundColour} />
                <div className={styles.privateRoundTitle}>Private Round</div>
              </div>
              <img
                className={styles.visibleIcon1}
                alt=""
                src="/visibleicon.svg"
              />
            </div>
            <div className={styles.prepublicRoundContainer}>
              <div className={styles.prepublicRoundContent}>
                <div className={styles.prepublicRoundColour} />
                <div className={styles.prepublicRoundTitle}>
                  Pre-Public Round
                </div>
              </div>
              <img
                className={styles.visibleIcon2}
                alt=""
                src="/visibleicon.svg"
              />
            </div>
            <div className={styles.publicRoundContainer}>
              <div className={styles.publicRoundContent}>
                <div className={styles.publicRoundColour} />
                <div className={styles.publicRoundTitle}>Public Sale</div>
              </div>
              <img
                className={styles.visibleIcon3}
                alt=""
                src="/visibleicon.svg"
              />
            </div>
            <div className={styles.liquidityContainer}>
              <div className={styles.liquidityContent}>
                <div className={styles.liquidityColour} />
                <div className={styles.liquidityTitle}>Liquidity</div>
              </div>
              <img
                className={styles.visibleIcon4}
                alt=""
                src="/visibleicon.svg"
              />
            </div>
            <div className={styles.incentivesContainer}>
              <div className={styles.incentivesContent}>
                <div className={styles.incentivesColour} />
                <div className={styles.incentivesTitle}>Incentives</div>
              </div>
              <img
                className={styles.visibleIcon5}
                alt=""
                src="/visibleicon.svg"
              />
            </div>
            <div className={styles.teamContainer}>
              <div className={styles.teamContent}>
                <div className={styles.teamColour} />
                <div className={styles.teamTitle}>Team</div>
              </div>
              <img
                className={styles.visibleIcon6}
                alt=""
                src="/visibleicon.svg"
              />
            </div>
            <div className={styles.advisorsContainer}>
              <div className={styles.advisorsContent}>
                <div className={styles.advisorsColour} />
                <b className={styles.advisorsTitle}>Advisors</b>
              </div>
              <img
                className={styles.visibleIcon7}
                alt=""
                src="/visibleicon.svg"
              />
            </div>
            <div className={styles.reserveContainer}>
              <div className={styles.reserveContent}>
                <div className={styles.reserveColour} />
                <div className={styles.reserveTitle}>Reserve Fund</div>
              </div>
              <img
                className={styles.visibleIcon8}
                alt=""
                src="/visibleicon.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.tokenomicsGraphContainer}>
          <div className={styles.notforlocofy}>
            <div className={styles.notforlocofy1}>Token Vesting Schedule</div>
          </div>
          <div className={styles.notforlocofy2}>
            <div className={styles.notforlocofy3} />
            <div className={styles.notforlocofy4} />
            <div className={styles.notforlocofy5} />
            <div className={styles.notforlocofy6} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaoContainer;
