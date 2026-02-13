import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { account, databases } from '../lib/appwrite';
import { ID, Query } from 'appwrite';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('categories');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const navigate = useNavigate();

  const databaseId = process.env.REACT_APP_APPWRITE_DATABASE_ID;
  const categoriesCollectionId = process.env.REACT_APP_APPWRITE_CATEGORIES_COLLECTION_ID;
  const menuItemsCollectionId = process.env.REACT_APP_APPWRITE_MENU_ITEMS_COLLECTION_ID;

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, activeTab]);

  const checkAuth = async () => {
    try {
      const currentUser = await account.get();
      setUser(currentUser);
    } catch (error) {
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    try {
      if (activeTab === 'categories') {
        const response = await databases.listDocuments(
          databaseId,
          categoriesCollectionId,
          [Query.orderAsc('order')]
        );
        setCategories(response.documents);
      } else {
        const response = await databases.listDocuments(
          databaseId,
          menuItemsCollectionId,
          [Query.orderAsc('order')]
        );
        setMenuItems(response.documents);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      navigate('/admin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    setEditingItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
  };

  const handleDelete = async (id, type) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    try {
      const collectionId = type === 'category' ? categoriesCollectionId : menuItemsCollectionId;
      await databases.deleteDocument(databaseId, collectionId, id);
      fetchData();
    } catch (error) {
      console.error('Error deleting:', error);
      alert('Error deleting item');
    }
  };

  if (loading) {
    return <div className="admin-loading">Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="admin-header-content">
          <h1>Bella Canto Admin</h1>
          <div className="admin-header-actions">
            <a 
              href="/" 
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                textDecoration: 'none',
                fontSize: '1.05rem',
                padding: '0.75rem 1.5rem',
                background: 'rgba(212, 175, 55, 0.1)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                fontWeight: '500'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'rgba(212, 175, 55, 0.2)';
                e.target.style.borderColor = '#d4af37';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'rgba(212, 175, 55, 0.1)';
                e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)';
              }}
            >
              ← Back to Website
            </a>
            <span className="admin-user">👤 {user?.name || user?.email}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        </div>
      </header>

      <div className="admin-content">
        <nav className="admin-tabs">
          <button
            className={activeTab === 'categories' ? 'active' : ''}
            onClick={() => setActiveTab('categories')}
          >
            Categories
          </button>
          <button
            className={activeTab === 'items' ? 'active' : ''}
            onClick={() => setActiveTab('items')}
          >
            Menu Items
          </button>
          <button
            className={activeTab === 'settings' ? 'active' : ''}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </nav>

        <div className="admin-main">
          {activeTab === 'categories' ? (
            <CategoriesView
              categories={categories}
              onAdd={() => openModal('category')}
              onEdit={(cat) => openModal('category', cat)}
              onDelete={(id) => handleDelete(id, 'category')}
            />
          ) : activeTab === 'items' ? (
            <MenuItemsView
              menuItems={menuItems}
              categories={categories}
              onAdd={() => openModal('item')}
              onEdit={(item) => openModal('item', item)}
              onDelete={(id) => handleDelete(id, 'item')}
            />
          ) : (
            <SettingsView user={user} />
          )}
        </div>
      </div>

      {showModal && (
        <Modal
          type={modalType}
          item={editingItem}
          categories={categories}
          onClose={closeModal}
          onSave={fetchData}
          databaseId={databaseId}
          categoriesCollectionId={categoriesCollectionId}
          menuItemsCollectionId={menuItemsCollectionId}
        />
      )}
    </div>
  );
};

const CategoriesView = ({ categories, onAdd, onEdit, onDelete }) => (
  <div className="data-view">
    <div className="view-header">
      <h2>Menu Categories</h2>
      <button onClick={onAdd} className="add-btn">+ Add New Category</button>
    </div>
    <div className="data-grid">
      {categories.map((cat) => (
        <div key={cat.$id} className="data-card">
          {cat.imageUrl && (
            <div className="card-image">
              <img src={cat.imageUrl} alt={cat.name || cat.nameEn} />
            </div>
          )}
          <h3>{cat.name || cat.nameEn}</h3>
          <div className="card-meta">
            <span>English: {cat.nameEn}</span>
            <span>Portuguese: {cat.namePt}</span>
          </div>
          <p>{cat.description || 'No description added'}</p>
          <div className="card-meta">Display Order: {cat.order}</div>
          <div className="card-actions">
            <button onClick={() => onEdit(cat)} className="edit-btn">Edit</button>
            <button onClick={() => onDelete(cat.$id)} className="delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MenuItemsView = ({ menuItems, categories, onAdd, onEdit, onDelete }) => (
  <div className="data-view">
    <div className="view-header">
      <h2>Menu Items</h2>
      <button onClick={onAdd} className="add-btn">+ Add New Menu Item</button>
    </div>
    <div className="data-grid">
      {menuItems.map((item) => {
        const category = categories.find(c => c.$id === item.categoryId);
        return (
          <div key={item.$id} className="data-card">
            <h3>{item.nameEn}</h3>
            <div className="card-meta">
              <span>Portuguese: {item.namePt}</span>
            </div>
            <div className="card-meta">
              <span>Category: {category?.name || category?.nameEn || 'Unknown'}</span>
              <span>Price: {item.price}</span>
            </div>
            {item.descriptionEn && (
              <p className="item-description">{item.descriptionEn}</p>
            )}
            {item.descriptionPt && (
              <p className="item-description" style={{fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)'}}>
                Portuguese: {item.descriptionPt}
              </p>
            )}
            <div className="card-meta">
              <span>Available: {item.available ? 'Yes ✓' : 'No ✗'}</span>
              <span>Display Order: {item.order}</span>
            </div>
            <div className="card-actions">
              <button onClick={() => onEdit(item)} className="edit-btn">Edit</button>
              <button onClick={() => onDelete(item.$id)} className="delete-btn">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const SettingsView = ({ user }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');
  const [changingPassword, setChangingPassword] = useState(false);

  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [newAdminName, setNewAdminName] = useState('');
  const [adminError, setAdminError] = useState('');
  const [adminSuccess, setAdminSuccess] = useState('');
  const [creatingAdmin, setCreatingAdmin] = useState(false);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess('');

    if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      return;
    }

    setChangingPassword(true);

    try {
      await account.updatePassword(newPassword, currentPassword);
      setPasswordSuccess('Password changed successfully!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setPasswordError(error.message || 'Failed to change password. Check your current password.');
    } finally {
      setChangingPassword(false);
    }
  };

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    setAdminError('');
    setAdminSuccess('');

    if (newAdminPassword.length < 8) {
      setAdminError('Password must be at least 8 characters long');
      return;
    }

    setCreatingAdmin(true);

    try {
      // Note: This requires server-side implementation or Appwrite Functions
      // For now, we'll show instructions to create via Appwrite Console
      setAdminError('To create a new admin user, please use the Appwrite Console:\n1. Go to https://cloud.appwrite.io/console\n2. Navigate to Auth\n3. Click "Create User"\n4. Enter the email, password, and name');
      
      // If you have Appwrite Functions set up for user creation, use this:
      // const response = await functions.createExecution('create-admin-user', JSON.stringify({
      //   email: newAdminEmail,
      //   password: newAdminPassword,
      //   name: newAdminName
      // }));
      
    } catch (error) {
      setAdminError(error.message || 'Failed to create admin user');
    } finally {
      setCreatingAdmin(false);
    }
  };

  return (
    <div className="data-view">
      <div className="view-header">
        <h2>Settings</h2>
      </div>

      <div style={{ display: 'grid', gap: '2.5rem', maxWidth: '800px' }}>
        {/* Current User Info */}
        <div className="settings-card">
          <h3 style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '1rem' }}>
            Current User
          </h3>
          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem' }}>
            <p><strong>Name:</strong> {user?.name || 'Not set'}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p><strong>User ID:</strong> {user?.$id}</p>
          </div>
        </div>

        {/* Change Password */}
        <div className="settings-card">
          <h3 style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '1rem' }}>
            Change Your Password
          </h3>
          <form onSubmit={handlePasswordChange} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {passwordError && (
              <div style={{
                background: 'rgba(220, 53, 69, 0.1)',
                border: '1px solid #dc3545',
                color: '#ff6b6b',
                padding: '1rem',
                borderRadius: '6px',
                fontSize: '1rem',
                whiteSpace: 'pre-line'
              }}>
                {passwordError}
              </div>
            )}
            {passwordSuccess && (
              <div style={{
                background: 'rgba(40, 167, 69, 0.1)',
                border: '1px solid #28a745',
                color: '#5cb85c',
                padding: '1rem',
                borderRadius: '6px',
                fontSize: '1rem'
              }}>
                {passwordSuccess}
              </div>
            )}
            
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter your current password"
                required
                disabled={changingPassword}
              />
            </div>

            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password (min 8 characters)"
                required
                disabled={changingPassword}
              />
            </div>

            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                required
                disabled={changingPassword}
              />
            </div>

            <button 
              type="submit" 
              className="save-btn" 
              disabled={changingPassword}
              style={{ width: 'fit-content', padding: '1rem 2rem' }}
            >
              {changingPassword ? 'Changing Password...' : 'Change Password'}
            </button>
          </form>
        </div>

        {/* Create New Admin */}
        <div className="settings-card">
          <h3 style={{ color: '#d4af37', fontSize: '1.5rem', marginBottom: '1rem' }}>
            Create New Admin User
          </h3>
          <div style={{
            background: 'rgba(255, 193, 7, 0.1)',
            border: '1px solid #ffc107',
            color: '#ffc107',
            padding: '1rem',
            borderRadius: '6px',
            fontSize: '1rem',
            marginBottom: '1.5rem'
          }}>
            <strong>Note:</strong> New admins must change their password after first login. To change a password, login with that admin account and use the "Change Your Password" section above.
          </div>

          <div style={{
            background: 'rgba(13, 110, 253, 0.1)',
            border: '1px solid #0d6efd',
            color: '#6ea8fe',
            padding: '1rem',
            borderRadius: '6px',
            fontSize: '1rem',
            marginBottom: '1.5rem'
          }}>
            <strong>How to Create New Admin:</strong><br/>
            1. Go to <a href="https://cloud.appwrite.io/console" target="_blank" rel="noopener noreferrer" style={{color: '#6ea8fe', textDecoration: 'underline'}}>Appwrite Console</a><br/>
            2. Navigate to <strong>Auth</strong> section<br/>
            3. Click <strong>"Create User"</strong><br/>
            4. Enter email, password (min 8 chars), and name<br/>
            5. Click <strong>"Create"</strong><br/>
            6. New admin can now login at <strong>/admin</strong>
          </div>

          <form onSubmit={handleCreateAdmin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {adminError && (
              <div style={{
                background: 'rgba(220, 53, 69, 0.1)',
                border: '1px solid #dc3545',
                color: '#ff6b6b',
                padding: '1rem',
                borderRadius: '6px',
                fontSize: '1rem',
                whiteSpace: 'pre-line'
              }}>
                {adminError}
              </div>
            )}
            {adminSuccess && (
              <div style={{
                background: 'rgba(40, 167, 69, 0.1)',
                border: '1px solid #28a745',
                color: '#5cb85c',
                padding: '1rem',
                borderRadius: '6px',
                fontSize: '1rem'
              }}>
                {adminSuccess}
              </div>
            )}

            <div className="form-group">
              <label>Admin Name</label>
              <input
                type="text"
                value={newAdminName}
                onChange={(e) => setNewAdminName(e.target.value)}
                placeholder="Example: John Doe"
                required
                disabled={creatingAdmin}
              />
            </div>
            
            <div className="form-group">
              <label>Admin Email</label>
              <input
                type="email"
                value={newAdminEmail}
                onChange={(e) => setNewAdminEmail(e.target.value)}
                placeholder="Example: manager@bellacanto.com"
                required
                disabled={creatingAdmin}
              />
            </div>

            <div className="form-group">
              <label>Initial Password</label>
              <input
                type="password"
                value={newAdminPassword}
                onChange={(e) => setNewAdminPassword(e.target.value)}
                placeholder="Min 8 characters (admin must change after first login)"
                required
                disabled={creatingAdmin}
              />
              <small style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem'}}>
                The new admin will need to change this password after their first login
              </small>
            </div>

            <div style={{
              background: 'rgba(220, 53, 69, 0.1)',
              border: '1px solid #dc3545',
              color: '#ff6b6b',
              padding: '1rem',
              borderRadius: '6px',
              fontSize: '1rem'
            }}>
              <strong>⚠️ Feature Not Available:</strong><br/>
              Admin creation from the dashboard requires Appwrite Functions setup. Please use the Appwrite Console method described above.
            </div>

            <button 
              type="button"
              onClick={() => window.open('https://cloud.appwrite.io/console', '_blank')}
              style={{
                width: 'fit-content',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            >
              Open Appwrite Console
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ type, item, categories, onClose, onSave, databaseId, categoriesCollectionId, menuItemsCollectionId }) => {
  const [formData, setFormData] = useState(
    item || (type === 'category'
      ? { name: '', nameEn: '', namePt: '', description: '', imageUrl: '', order: 10 }
      : { nameEn: '', namePt: '', descriptionEn: '', descriptionPt: '', price: '', categoryId: '', available: true, order: 10 })
  );
  const [saving, setSaving] = useState(false);
  const [existingOrders, setExistingOrders] = useState([]);

  // Fetch existing orders when modal opens
  React.useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (type === 'category') {
          const response = await databases.listDocuments(
            databaseId,
            categoriesCollectionId,
            [Query.orderAsc('order')]
          );
          const orders = response.documents
            .filter(doc => doc.$id !== item?.$id) // Exclude current item if editing
            .map(doc => ({ order: doc.order, name: doc.name || doc.nameEn }));
          setExistingOrders(orders);
        } else if (formData.categoryId) {
          const response = await databases.listDocuments(
            databaseId,
            menuItemsCollectionId,
            [
              Query.equal('categoryId', formData.categoryId),
              Query.orderAsc('order')
            ]
          );
          const orders = response.documents
            .filter(doc => doc.$id !== item?.$id) // Exclude current item if editing
            .map(doc => ({ order: doc.order, name: doc.nameEn }));
          setExistingOrders(orders);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, formData.categoryId, item]);

  // Suggest next available order
  const suggestNextOrder = () => {
    if (existingOrders.length === 0) return 10;
    const maxOrder = Math.max(...existingOrders.map(o => o.order));
    return maxOrder + 10;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const collectionId = type === 'category' ? categoriesCollectionId : menuItemsCollectionId;
      
      if (item) {
        await databases.updateDocument(databaseId, collectionId, item.$id, formData);
      } else {
        await databases.createDocument(databaseId, collectionId, ID.unique(), formData);
      }
      
      onSave();
      onClose();
    } catch (error) {
      console.error('Error saving:', error);
      alert('Error saving item: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const isDuplicateOrder = existingOrders.some(o => o.order === formData.order);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{item ? 'Edit' : 'Add'} {type === 'category' ? 'Category' : 'Menu Item'}</h2>
          <button onClick={onClose} className="close-btn">×</button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-form">
          {type === 'category' ? (
            <>
              <div className="form-group">
                <label>Category Name (for reference)</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Example: Pizza"
                  required
                />
                <small style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem'}}>
                  This is just for your reference in the admin panel
                </small>
              </div>
              <div className="form-group">
                <label>English Name (shown to customers)</label>
                <input
                  type="text"
                  value={formData.nameEn}
                  onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                  placeholder="Example: Pizza"
                  required
                />
              </div>
              <div className="form-group">
                <label>Portuguese Name (shown to customers)</label>
                <input
                  type="text"
                  value={formData.namePt}
                  onChange={(e) => setFormData({ ...formData, namePt: e.target.value })}
                  placeholder="Example: Pizza"
                  required
                />
              </div>
              <div className="form-group">
                <label>Description (optional)</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows="2"
                  placeholder="Brief description of this category"
                />
              </div>
              <div className="form-group">
                <label>Category Image URL</label>
                <input
                  type="url"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  required
                />
                <small style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem'}}>
                  Get free images from Unsplash.com or use any image URL
                </small>
              </div>
              <div className="form-group">
                <label>Display Order (lower numbers show first)</label>
                <div style={{display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem'}}>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    placeholder="Example: 10, 20, 30..."
                    style={{flex: 1}}
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, order: suggestNextOrder() })}
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(212, 175, 55, 0.2)',
                      border: '1px solid #d4af37',
                      color: '#d4af37',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Suggest: {suggestNextOrder()}
                  </button>
                </div>
                {isDuplicateOrder && (
                  <div style={{
                    background: 'rgba(255, 193, 7, 0.1)',
                    border: '1px solid #ffc107',
                    color: '#ffc107',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem'
                  }}>
                    ⚠️ Warning: Order {formData.order} is already used. Items with same order will be sorted alphabetically.
                  </div>
                )}
                {existingOrders.length > 0 && (
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.95rem',
                    maxHeight: '120px',
                    overflowY: 'auto'
                  }}>
                    <strong style={{color: '#d4af37'}}>Existing categories:</strong>
                    <div style={{marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
                      {existingOrders.map((o, idx) => (
                        <div key={idx} style={{color: 'rgba(255,255,255,0.7)'}}>
                          Order {o.order}: {o.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <small style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', display: 'block', marginTop: '0.5rem'}}>
                  Use 10, 20, 30 to make reordering easier later
                </small>
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label>Dish Name in English</label>
                <input
                  type="text"
                  value={formData.nameEn}
                  onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                  placeholder="Example: Pizza Margherita"
                  required
                />
              </div>
              <div className="form-group">
                <label>Dish Name in Portuguese</label>
                <input
                  type="text"
                  value={formData.namePt}
                  onChange={(e) => setFormData({ ...formData, namePt: e.target.value })}
                  placeholder="Example: Pizza Margherita"
                  required
                />
              </div>
              <div className="form-group">
                <label>Which Category?</label>
                <select
                  value={formData.categoryId}
                  onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                  required
                >
                  <option value="">-- Select a category --</option>
                  {categories.map((cat) => (
                    <option key={cat.$id} value={cat.$id}>{cat.name || cat.nameEn}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Description in English (ingredients, etc.)</label>
                <textarea
                  value={formData.descriptionEn}
                  onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
                  rows="3"
                  placeholder="Example: Caputo flour, tomato sauce, mozzarella, basil, oregano"
                />
              </div>
              <div className="form-group">
                <label>Description in Portuguese (ingredientes, etc.)</label>
                <textarea
                  value={formData.descriptionPt}
                  onChange={(e) => setFormData({ ...formData, descriptionPt: e.target.value })}
                  rows="3"
                  placeholder="Example: Farinha Caputo, molho de tomate, mozzarella, manjericão, orégãos"
                />
              </div>
              <div className="form-group">
                <label>Price (as shown to customers)</label>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="Example: 8,50€  or  M: 8,50€ / R: 9,50€"
                  required
                />
                <small style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem'}}>
                  Type exactly how you want it to appear on the menu
                </small>
              </div>
              <div className="form-group">
                <label>Display Order (lower numbers show first)</label>
                <div style={{display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.5rem'}}>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                    placeholder="Example: 10, 20, 30..."
                    style={{flex: 1}}
                  />
                  {formData.categoryId && (
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, order: suggestNextOrder() })}
                      style={{
                        padding: '0.75rem 1rem',
                        background: 'rgba(212, 175, 55, 0.2)',
                        border: '1px solid #d4af37',
                        color: '#d4af37',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '0.95rem',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      Suggest: {suggestNextOrder()}
                    </button>
                  )}
                </div>
                {isDuplicateOrder && (
                  <div style={{
                    background: 'rgba(255, 193, 7, 0.1)',
                    border: '1px solid #ffc107',
                    color: '#ffc107',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem'
                  }}>
                    ⚠️ Warning: Order {formData.order} is already used in this category. Items with same order will be sorted alphabetically.
                  </div>
                )}
                {existingOrders.length > 0 && formData.categoryId && (
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    fontSize: '0.95rem',
                    maxHeight: '120px',
                    overflowY: 'auto'
                  }}>
                    <strong style={{color: '#d4af37'}}>Existing items in this category:</strong>
                    <div style={{marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
                      {existingOrders.map((o, idx) => (
                        <div key={idx} style={{color: 'rgba(255,255,255,0.7)'}}>
                          Order {o.order}: {o.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <small style={{color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', display: 'block', marginTop: '0.5rem'}}>
                  Use 10, 20, 30 to make reordering easier later
                </small>
              </div>
              <div className="form-group checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    checked={formData.available}
                    onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
                  />
                  This item is available (uncheck to hide from menu)
                </label>
              </div>
            </>
          )}
          
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn" disabled={saving}>
              Cancel
            </button>
            <button type="submit" className="save-btn" disabled={saving}>
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
