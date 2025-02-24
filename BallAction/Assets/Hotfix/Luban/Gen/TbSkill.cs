
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
public partial class TbSkill
{
    private readonly System.Collections.Generic.Dictionary<int, CfgSkill> _dataMap;
    private readonly System.Collections.Generic.List<CfgSkill> _dataList;
    
    public TbSkill(ByteBuf _buf)
    {
        _dataMap = new System.Collections.Generic.Dictionary<int, CfgSkill>();
        _dataList = new System.Collections.Generic.List<CfgSkill>();
        
        for(int n = _buf.ReadSize() ; n > 0 ; --n)
        {
            CfgSkill _v;
            _v = CfgSkill.DeserializeCfgSkill(_buf);
            _dataList.Add(_v);
            _dataMap.Add(_v.Id, _v);
        }
    }

    public System.Collections.Generic.Dictionary<int, CfgSkill> DataMap => _dataMap;
    public System.Collections.Generic.List<CfgSkill> DataList => _dataList;

    public CfgSkill GetOrDefault(int key) => _dataMap.TryGetValue(key, out var v) ? v : null;
    public CfgSkill Get(int key) => _dataMap[key];
    public CfgSkill this[int key] => _dataMap[key];

    public void ResolveRef(Tables tables)
    {
        foreach(var _v in _dataList)
        {
            _v.ResolveRef(tables);
        }
    }

}

}

