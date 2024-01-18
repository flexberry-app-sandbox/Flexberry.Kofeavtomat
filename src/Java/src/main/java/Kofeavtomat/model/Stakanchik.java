package Kofeavtomat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kofeavtomat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Стаканчик
 */
@Entity(name = "IISKofeavtomatСтаканчик")
@Table(schema = "public", name = "Стаканчик")
public class Stakanchik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Объем")
    private Integer объем;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kofe")
    @Convert("Kofe")
    @Column(name = "Кофе", length = 16, unique = true, nullable = false)
    private UUID _kofeid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kofe", insertable = false, updatable = false)
    private Kofe kofe;


    public Stakanchik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Integer getОбъем() {
      return объем;
    }

    public void setОбъем(Integer объем) {
      this.объем = объем;
    }


}