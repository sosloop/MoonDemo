
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using Luban;


namespace cfg
{
public partial class TbDailyReward
{
    private readonly System.Collections.Generic.Dictionary<int, CfgDailyReward> _dataMap;
    private readonly System.Collections.Generic.List<CfgDailyReward> _dataList;
    
    public TbDailyReward(ByteBuf _buf)
    {
        _dataMap = new System.Collections.Generic.Dictionary<int, CfgDailyReward>();
        _dataList = new System.Collections.Generic.List<CfgDailyReward>();
        
        for(int n = _buf.ReadSize() ; n > 0 ; --n)
        {
            CfgDailyReward _v;
            _v = CfgDailyReward.DeserializeCfgDailyReward(_buf);
            _dataList.Add(_v);
            _dataMap.Add(_v.Id, _v);
        }
    }

    public System.Collections.Generic.Dictionary<int, CfgDailyReward> DataMap => _dataMap;
    public System.Collections.Generic.List<CfgDailyReward> DataList => _dataList;

    public CfgDailyReward GetOrDefault(int key) => _dataMap.TryGetValue(key, out var v) ? v : null;
    public CfgDailyReward Get(int key) => _dataMap[key];
    public CfgDailyReward this[int key] => _dataMap[key];

    public void ResolveRef(Tables tables)
    {
        foreach(var _v in _dataList)
        {
            _v.ResolveRef(tables);
        }
    }

}

}

