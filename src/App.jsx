import { useEffect, useMemo, useState } from 'react';

const MENU_API_URL =
  '/api/omni/api/trpc/menuCategory.getByStore?input=%7B%22json%22%3A%7B%22storeId%22%3A0%7D%7D';

const PAPA_JOHNS_ASSET_BASE = 'https://www.papajohns.com';

const getImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  return `${PAPA_JOHNS_ASSET_BASE}${path}`;
};

const formatCategoryName = (name) => name.replace(/_/g, ' ');

function App() {
  const [menuData, setMenuData] = useState([]);
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchMenu = async () => {
      try {
        const response = await fetch(MENU_API_URL, {
          signal: controller.signal,
          headers: {
            accept: '*/*',
            adrum: 'isAjax:true',
            'x-trpc-source': 'nextjs-react',
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const payload = await response.json();
        const categories = payload?.result?.data?.json?.menuCategories ?? [];
        setMenuData(categories);
        setStatus('ready');
      } catch (error) {
        if (error.name === 'AbortError') return;
        setErrorMessage(error.message || 'Unable to load menu.');
        setStatus('error');
      }
    };

    fetchMenu();

    return () => controller.abort();
  }, []);

  const categoryNav = useMemo(
    () =>
      menuData.map((category) => ({
        id: category.categoryId,
        name: category.name,
      })),
    [menuData]
  );

  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">Papa Johns Menu</p>
          <h1>Order-worthy flavors, served fresh.</h1>
          <p className="subtitle">
            Browse popular categories and seasonal favorites pulled directly from
            Papa Johns public menu API.
          </p>
          <div className="cta-row">
            <button type="button" className="primary-btn">
              Start Order
            </button>
            <button type="button" className="ghost-btn">
              View Deals
            </button>
          </div>
        </div>
        <div className="hero-card">
          <div className="hero-card__content">
            <h2>Today&apos;s picks</h2>
            <p>
              Fresh-baked crusts, bold sauces, and craveable sides — curated for
              quick ordering.
            </p>
            <div className="hero-tags">
              <span>Hot &amp; Fresh</span>
              <span>Family Friendly</span>
              <span>New Arrivals</span>
            </div>
          </div>
        </div>
      </header>

      <nav className="category-nav">
        {categoryNav.map((category) => (
          <a key={category.id} href={`#${category.id}`}>
            {category.name}
          </a>
        ))}
      </nav>

      {status === 'loading' && (
        <div className="status">Loading menu items...</div>
      )}
      {status === 'error' && (
        <div className="status status-error">
          <p>Unable to load menu.</p>
          <span>{errorMessage}</span>
        </div>
      )}

      {status === 'ready' && (
        <main className="menu">
          {menuData.map((category) => (
            <section key={category.categoryId} id={category.categoryId}>
              <div className="section-header">
                <div>
                  <h2>{category.name}</h2>
                  <p>
                    Explore {formatCategoryName(category.categoryId)} favorites
                    curated for your next order.
                  </p>
                </div>
                {category.iconImage && (
                  <img
                    src={getImageUrl(category.iconImage)}
                    alt={category.name}
                  />
                )}
              </div>

              {category.sections?.map((section) => (
                <div key={section.sectionId} className="menu-section">
                  <div className="menu-section__header">
                    <h3>{section.name}</h3>
                    {section.description && <p>{section.description}</p>}
                  </div>
                  <div className="menu-grid">
                    {section.productGroups?.map((product) => (
                      <article
                        key={product.productGroupId}
                        className="menu-card"
                      >
                        <div className="menu-card__image">
                          {product.webImageURL || product.imageURL ? (
                            <img
                              src={getImageUrl(
                                product.webImageURL || product.imageURL
                              )}
                              alt={product.title}
                            />
                          ) : (
                            <div className="menu-card__placeholder">No image</div>
                          )}
                        </div>
                        <div className="menu-card__body">
                          <h4>{product.title}</h4>
                          <p>{product.shortDescription || product.description}</p>
                          <div className="menu-card__footer">
                            <span className="tag">
                              {product.customizable === 'full'
                                ? 'Customizable'
                                : 'Chef-crafted'}
                            </span>
                            <button type="button">Add</button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          ))}
        </main>
      )}
    </div>
  );
}

export default App;
