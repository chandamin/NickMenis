export default function Leads({ leads, refreshLeads, filteredMarketplaceLeads,formatCurrency,openLead,ageFilter,setAgeFilter }) {
  return (
    <div className="custom-admin-view custom-admin-view-leads">
                <div className="custom-admin-card">
                  <div className="custom-admin-panel-head">
                    <h3>Leads Marketplace (Admin Tools)</h3>
                    <div className="custom-admin-muted">Control visibility, age-based availability.</div>
                  </div>

                  <div className="custom-admn-leads-host">
                    <label className='custom-admin-small-muted'>Show leads older than (days)</label>
                   <div className="custom-admin-lead-ryt">
                    <input type='number' value={ageFilter} onChange={e=>setAgeFilter(e.target.value)} style={{width:80,padding:8,borderRadius:6,border:'1px solid #eee'}} />
                    <button className='custom-admin-btn' onClick={refreshLeads}>Apply</button>
                  </div>
                  </div>

                  <table className='custom-admin-table' id='custom-admin-leadsTable'>
                    <thead>
                      <tr>
                        <th>Lead ID</th>
                        <th>Type</th>
                        <th>Area</th>
                        <th>Value</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      
                      {filteredMarketplaceLeads.length === 0 && (
                        <tr>
                          <td colSpan={7} style={{textAlign:'center',color:'#888'}}>No leads found</td>
                        </tr>
                      )}

                      {filteredMarketplaceLeads.map(l => (
                        <tr key={l.id}>
                          <td>{l.leadName}</td>
                          <td>{l.type}</td>
                          <td>{l.area}</td>
                          <td>{formatCurrency(l.value)}</td>
                          <td>{l.ageDays}d</td>
                          <td>{l.status || 'New'}</td>
                          <td style={{textAlign:'right'}}>
                            <button className='custom-admin-btn' onClick={()=>openLead(l.id)}>Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                </div>
              </div>
  );
}
