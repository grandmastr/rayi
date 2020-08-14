//@flow
import {default as React, useMemo} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'

import Container from './styles'
import {Hero} from '../../components'
import {Button} from '../../urgent-fury'

const Services = (): React$Node => {
  const location = useLocation()
  const tabs = [
    'accounts',
    'credits',
    'sme loans',
    'e-banking',
    'impact enterprise',
  ]

  const activeTab = useMemo(() => location?.search.substring(3), [location])

  return (
    <Container>
      <Hero
        pageTitle={'our services.'}
        pageTitleDetails={'what we do'}
        backgroundImage={
          'https://res.cloudinary.com/fabrixrus/image/upload/v1595534159/OLM/christina-wocintechchat-com-rg1y72eKw6o-unsplash.jpg'
        }
      />
      <section className={'tablist-container'}>
        <ul role={'tablist'} className={'services__tab-list'}>
          {tabs.map(tab => (
            <li
              role={'tab'}
              key={tab}
              aria-selected={
                activeTab ===
                tab
                  .toLowerCase()
                  .split(' ')
                  .join('-')
              }
              className={
                activeTab ===
                tab
                  .toLowerCase()
                  .split(' ')
                  .join('-')
                  ? 'active'
                  : null
              }
            >
              <Link
                to={`/services/?t=${tab
                  .toLowerCase()
                  .split(' ')
                  .join('-')}`}
                aria-label={`go to OLM ${tab} tab`}
              >
                {tab}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {activeTab === 'accounts' && (
        <>
          <section className="olm-services__details">
            <div>
              <div className={'services__tab-content'}>
                <h3>current accounts</h3>
                <p>
                  OLM Current Account always provides you with unlimited access
                  to your money. You can manage your business, execute your
                  payments and receive your salary through this account. It is
                  available to both individuals and corporate bodies. Benefits
                  are extraordinary and they include:
                </p>
                <div>
                  <ul>
                    <li>No maintenance fee</li>
                    <li>Funds Transfer to all commercial banks in Nigeria</li>
                    <li>Internal transfers free of charge</li>
                    <li>Encashment of cheques</li>
                    <li>Standing order transfers/payments</li>
                    <li>Free statement of account</li>
                    <li>Transparent transaction</li>
                    <li>SMS Alert Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="olm-services__details alternate">
            <div>
              <div className={'services__tab-content'}>
                <h3>olm savings account</h3>
                <p>
                  OLM Savings Account gives you the advantages of competitive
                  interest rates and the availability of your funds, without
                  forfeiture of interest in case of withdrawal. The account may
                  be owned by an individual, an organization or an association.
                  Benefits include:
                </p>
                <div>
                  <ul>
                    <li>Simple account opening process</li>
                    <li>Attractive interest rates</li>
                    <li>Free statement of account (on request)</li>
                    <li>SMS Alert services</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="olm-services__details">
            <div>
              <div className={'services__tab-content'}>
                <h3>kolo olm account</h3>
                <p>
                  Kolo OLM Account (OPA) is a form of deposit and continuous
                  saving structure that allows you to fix your money for a
                  chosen period of time and gain attractive interest rates.
                  Benefits include;
                </p>
                <div>
                  <ul>
                    <li>Minimum amount of N30,000</li>
                    <li>Competitive interest rates</li>
                    <li>Maturity 30 - 360 days</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {activeTab === 'credits' && (
        <>
          <section className={'olm__services--credits-intro'}>
            <div>
              <h1>Credits That Suit Your Needs</h1>
              <p>
                OLM is recognized as one of the best credits offering financial
                institutions in the country. OLM has the best culture of
                providing a prompt support for all its clients with a viable
                proposals and genuine applications.
              </p>
            </div>
          </section>
          <section className={'olm__services--credits'}>
            <div>
              <div>
                <h3>PERSONAL LOAN</h3>
                <h1>You're a few clicks away.</h1>
              </div>
              <div>
                <p>
                  Whether it's time to sort out your finances, replace the
                  family car or finally make a start on those home renovations,
                  OLM personal loan could be the answer. With your dream of
                  securing OLM personalised loan a few steps away, getting
                  things moving is easier than you believe. Speak with the OLM
                  team for on the spot assessment, instant approval and swiftly
                  put your plan into action.
                </p>
              </div>
            </div>
          </section>
          <section className={'olm__services--credits'}>
            <div>
              <div>
                <h3>EDUCATION LOAN</h3>
                <h1>Investing in Your Education is OLM's Commitment.</h1>
              </div>
              <div>
                <p>
                  Thousands of students yearly head off to universities for
                  matriculations and with excitement for the future. It is clear
                  that higher education doesn’t come cheap. You might be able to
                  secure your education journey and pay for your tuitions
                  through the help of OLM education loan scheme. Reach out to
                  the OLM team to understand its various exciting offers that
                  fit into your condition.
                </p>
              </div>
            </div>
          </section>
          <section className={'olm__services--credits'}>
            <div>
              <div>
                <h3>festival LOAN</h3>
                <h1>Seasons to remember.</h1>
              </div>
              <div>
                <p>
                  During the festive season, OLM offers you with a hassle-free
                  loan application to meet your financial needs. You can realize
                  the dreams of fascinating festivals with your loved one. Don’t
                  miss out on the fun and frolic of festivals. Opt for OLM
                  Festival Loan to shop for clothes, gifts, sweets and
                  groceries. Bring back the cheer and celebrate in style. Reach
                  out to the OLM team for the best offer that suits your needs.
                </p>
              </div>
            </div>
          </section>
          <section className={'olm__services--credits'}>
            <div>
              <div>
                <h3>health LOAN</h3>
                <h1>Health is Wealth</h1>
              </div>
              <div>
                <p>
                  Healthcare has become very expensive and not everyone can
                  afford it, therefore, OLM is aiming to support them by
                  financing loan applications to meet the health expenses.
                  Health loan is aimed to cover emergency or planned medical
                  procedures. A personal health loan ensures that you get
                  quality medical care with no delay. This loan can be used to
                  pay for medical expenses including hospitalisation bills,
                  medical prescription bills, surgeries and other related
                  expenses. OLM excellent team are on standby to support you
                  along this journey.
                </p>
              </div>
            </div>
          </section>
          <section className={'olm__services--credits'}>
            <div>
              <div>
                <h3>HOUSING LOAN</h3>
                <h1>Own your dream house.</h1>
              </div>
              <div>
                <p>
                  The home of your dreams can now be yours with OLM Housing
                  Loans. Enjoy facilities like maximum possible loan amount,
                  long repayment tenure and easy on your monthly. Now, build
                  your dream home without facing any financial hardship. OLM
                  excellent team are on standby to support you along this
                  journey.
                </p>
              </div>
            </div>
          </section>
          <section className={'olm__services--credits'}>
            <div>
              <div>
                <h3>BUSINESS LOAN</h3>
                <h1>Be Confident About Your Ideas and Your Finance.</h1>
              </div>
              <div>
                <p>
                  OLM offers entrepreneurs the opportunity to easily access
                  loans in a quick, transparent and efficient environment. Our
                  expertise and international best practices assure our clients
                  quality service and delivery. Loans currently range from
                  N15,000.00 to N1 million; maximum maturity is 18 months; for
                  larger loan sizes. No mandatory deposits/savings and no cash
                  collateral required. No audited financial statements required.
                  Flexible collateral arrangements depending on loan size
                  (household goods, business equipment, goods in stock,
                  vehicles, property etc.) Flexible documentation requirements.
                  Long-standing clients with impeccable repayment record qualify
                  for successive interest rate discounts and even faster loan
                  processing. OLM pays close attention to borrower groups –this
                  is assessed based on their collective interest. Free SMS
                  Reminder for your Monthly Repayments Are you excited about
                  this opportunity? Simply speak to one of our designated team
                  or e-meet our friendly loan officers to assess your proposal
                  prior to OLM Micro Loan Team decision.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
      {activeTab === 'sme-loans' && (
        <>
          <section className="olm-services__sme-loans">
            <div>
              <div>
                <p>
                  What sets OLM Bank apart is principally the adeptness and
                  comfort of access to credit facilities. Documentation and
                  collateral requirements are considerably more flexible than
                  conventional financial institutions, and the processing time
                  is the shortest available.
                </p>
                <p>
                  Building on OLM global expertise and on our international
                  standards in banking sector, we can assure our clients highest
                  quality service and delivery, its approach is to efficiently
                  offer business owners swift pathways to access various loan
                  products. Prospective borrowers do not need to have saved any
                  money with OLM Bank before applying for a loan, as OLM do not
                  support culture of forced savings but respectfully encourage
                  savings through business owners’ capabilities. All that is
                  needed is an existing viable business.
                </p>
                <div>
                  <h3>OLM SME LOANS REQUIREMENTS</h3>
                  <ul>
                    <li>
                      Loans from NGN 500,001 to NGN5,000,000 for your existing
                      business.
                    </li>
                    <li>
                      Competitive Interest Rate starting from 3.0% monthly on
                      reducing balance.
                    </li>
                    <li>Disbursement fee of 1.0% of the loan amount.</li>
                    <li>
                      Maturity period from 6 to 24 months with equal monthly
                      instalments.
                    </li>
                    <li>Broad of collateral items accepted.</li>
                    <li>
                      Upon submission of all required documents, loan
                      disbursement within 48 hours.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      {activeTab === 'e-banking' && (
        <>
          <section className={'olm__services--eBanking-intro'}>
            <div>
              <h2>Now myOLM account is accessible from my mobile phone.</h2>
            </div>
          </section>
          <section className="olm__services--eBanking">
            <div>
              <div
                role={'img'}
                aria-label={'a woman operating her mobile phone'}
              />
              <div>
                <h4>myOLMmobile</h4>
                <p>
                  This is a free mobile banking serve that OLM offers its esteem
                  customers. Every client can perform all the available
                  transactions free of charge. myOLMmobile is fast, secure and
                  convenient and enables you to execute basic banking
                  transactions from your OLM bank account through your mobile
                  phone.
                </p>
                <h3>features</h3>
                <ul>
                  <li>Send and Receive Money.</li>
                  <li>Transfer funds.</li>
                  <li>Loan repayment</li>
                  <li>Bill Payment</li>
                  <li>Airtime topup</li>
                  <li>Mini statement</li>
                  <li>Balance Enquiry</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="olm__services-eBanking--alternate">
            <div>
              <div>
                <h4>myOLMcard</h4>
                <p>
                  myOLMcard MasterCard is a debit card, widely accepted in major
                  ATMs, POS and other Retail Outlets in Nigeria and can equally
                  be used for international transactions outside of Nigeria
                  (that are MasterCard Compliant). It offers our customers
                  ultimate convenience and control of available funds in their
                  Account. You are assured access to your funds Nationwide.
                </p>
              </div>
              <div role={'img'} aria-label={'a debit card'} />
            </div>
          </section>
          <section className="olm__services--eBanking">
            <div>
              <div
                role={'img'}
                aria-label={'a point of sale machine'}
                className={'x2'}
              />
              <div>
                <h4>myOLMPOS</h4>
                <p>
                  MyOLM-POS is a transportable device that simplifies payments
                  for goods and services at your location using payment cards
                  issued by all banks. OLM POS is designed to proffer you
                  maximum security and ease of accepting debit and credit card
                  transactions done with Visa, Verve and MasterCard cards issued
                  both in Nigeria and Overseas. With myOLM-POS terminals, your
                  business is surely positioned for growth while eliminating
                  risk associated with cash handling.
                </p>
                <h3>features</h3>
                <ul>
                  <li>Reduces cost of cash handling.</li>
                  <li>Convenience of cashless trading.</li>
                  <li>
                    Convenient means of payment for customers thereby increasing
                    sales.
                  </li>
                  <li>
                    Improved accounting and reconciliation for sales /
                    collections.
                  </li>
                  <li>
                    Improved security due to reduced volume of cash handling.
                  </li>
                  <li>Ability to generate electronic receipts for payments.</li>
                  <li>
                    Convenient to use for all amounts, as cash payment could be
                    bulky.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </>
      )}
      {activeTab === 'impact-enterprise' && (
        <>
          <section className={'olm__services--impact-enterprise'}>
            <div>
              <div>
                <h1>Improved Lives.</h1>
              </div>
              <div>
                <p>
                  OLM is resolved to enhance human dignity as it rolls our
                  various impactful enterprises that positively improves the
                  lives of poor and vulnerable people around Nigeria. Through
                  its technical skills, OLM helps people build sustainable
                  livelihoods that can support their families. It equally
                  provides soft financial credit and responsibly guide them to
                  build sustainable small businesses. The overall purpose is to
                  enhance their quality of lives as they grow their businesses,
                  send their children to school, meet their personal aspirations
                  and improve their communities.
                </p>
              </div>
            </div>
          </section>
          <section className={'olm__services--impact-enterprise'}>
            <div>
              <div>
                <h1>Transformed Communities.</h1>
              </div>
              <div>
                <p>
                  OLM strongly advocates for communities’ transformation and
                  continues to provide thriving approach to different
                  cooperative societies about building resilience businesses
                  even in tough times. OLM shapes and support the development of
                  strong local markets with ripple effect of alleviating
                  poverty, new jobs creation, building women empowerment
                  mechanisms as well as providing space for vital goods and
                  services.
                </p>
              </div>
            </div>
          </section>
          <section className={'olm__services--impact-enterprise'}>
            <div>
              <div>
                <h1>Innovations and Technology.</h1>
              </div>
              <div>
                <p>
                  OLM is a firm believer of innovation and through its
                  collaborative efforts with the Royal African Young Innovators
                  (RAYI), OLM is enabling access to responsible and innovative
                  financial services for low-income clients. To reach more
                  people, drive greater efficiency and reduce costs, the OLM
                  supports fintech solutions and embraces new products that are
                  aiding seamless financial operations.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
      <section className="olm-services__reach-out">
        <div>
          <h1>Like what you see?</h1>
          <span>Reach out to us today!</span>
          <Button>
            Contact Us
            <Icon icon={faArrowAltCircleRight} />
          </Button>
        </div>
      </section>
    </Container>
  )
}

export default Services
